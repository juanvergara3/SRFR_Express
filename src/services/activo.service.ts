import { runQueryAsync } from "./db.service";

async function getActivos() {
  return await runQueryAsync(`select * from dbo.activos;`);
}

// async function getActivosPendientes() {
//   return await runQueryAsync(
//     `DECLARE @current_date AS DATE = GETDATE();

//     SELECT a.*
//     FROM activos a
//       LEFT JOIN activos_periodos ap ON a.id_activo = ap.id_activo
//       LEFT JOIN periodos p ON p.id_periodo = ap.id_periodo
//     WHERE a.id_estado = 1 AND (DATEDIFF(month, COALESCE(p.fecha_fin, @current_date), @current_date) >= 1 OR p.id_periodo IS NULL);`
//   );
// }

async function getActivosPendientes() {
  return await runQueryAsync(
    `DECLARE @current_date AS DATE = GETDATE();
    SELECT a.*
    FROM activos a
      LEFT JOIN activos_periodos ap ON a.id_activo = ap.id_activo
      LEFT JOIN periodos p ON p.id_periodo = ap.id_periodo
      INNER JOIN (
        SELECT ae.id_activo, e.id_entrega, e.fecha_devolucion
        FROM activos_entregas ae
          INNER JOIN entregas e ON e.id_entrega = ae.id_entrega
          INNER JOIN (
            SELECT id_activo, MAX(fecha_entrega) AS fecha_entrega_max
            FROM activos_entregas ae
              INNER JOIN entregas e ON e.id_entrega = ae.id_entrega
            GROUP BY id_activo
          ) AS f ON f.id_activo = ae.id_activo AND f.fecha_entrega_max = e.fecha_entrega
      ) AS e ON e.id_activo = a.id_activo
    WHERE a.id_estado = 1 AND (DATEDIFF(month, COALESCE(p.fecha_fin, @current_date), @current_date) >= 1 OR p.id_periodo IS NULL)
      AND e.fecha_devolucion IS NULL;`
  );
}

async function getActivosByGrupo(idGrupo: number) {
  return await runQueryAsync(`select * from dbo.Activos where id_grupo = ${idGrupo};`);
}

async function getActivosByPeriodo(idPeriodo: number) {
  return await runQueryAsync(
    `SELECT a.*
      FROM activos a
      INNER JOIN activos_periodos ap ON a.id_activo = ap.id_activo
    WHERE ap.id_periodo = ${idPeriodo};`
  );
}

async function getActivosByEntrega(idEntrega: number) {
  return await runQueryAsync(
    `SELECT a.*
      FROM activos a
      INNER JOIN activos_entregas ap ON a.id_activo = ap.id_activo
    WHERE ap.id_entrega = ${idEntrega};`
  );
}

export { getActivos, getActivosPendientes, getActivosByGrupo, getActivosByPeriodo, getActivosByEntrega };
