import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getTipos() {
  return await runQueryAsync(`select * from dbo.tipos;`);
}

async function getTipoById(idTipo: number) {
  return await runQueryAsync(`select * from dbo.tipos where id_tipo = ${idTipo};`);
}

export { getTipos, getTipoById };