import { runQueryAsync } from "./db.service";

async function getActivos() {
  return await runQueryAsync(`select * from dbo.activos;`);
}
async function getActivosPendientes() {
  return await runQueryAsync(
    `declare @current_date as date = GETDATE();
    
    SELECT a.*
      FROM activos a
      INNER JOIN activos_periodos ap ON a.id_activo = ap.id_activo
	    inner join periodos p on p.id_periodo = ap.id_periodo
    WHERE DATEDIFF(month, p.fecha_fin, @current_date) >= 1;`
  );
}

async function getActivosByGrupo(idGrupo: number) {
  return await runQueryAsync(`select * from dbo.Activos where id_grupo = ${idGrupo};`);
}

export { getActivos, getActivosPendientes, getActivosByGrupo };
