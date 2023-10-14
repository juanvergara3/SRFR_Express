import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getEstados() {
  return await runQueryAsync(`select * from dbo.estados;`);
}

async function getEstadoById(idEstado: number) {
  return await runQueryAsync(`select * from dbo.estados where id_Estado = ${idEstado};`);
}

export { getEstados, getEstadoById };