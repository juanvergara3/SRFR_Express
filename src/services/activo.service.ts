import { runQueryAsync } from "./db.service";

async function getActivos() {
  
  return await runQueryAsync(`select * from dbo.activos;`);
}

async function getActivosByGrupo(idGrupo: number) {
  return await runQueryAsync(`select * from dbo.Activos where id_grupo = ${idGrupo};`);
}

export { getActivos, getActivosByGrupo };
