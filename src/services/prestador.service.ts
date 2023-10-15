import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getPrestadores() {
  return await runQueryAsync(`select * from dbo.prestadores;`);
}

async function getPrestadorById(idPrestador: number) {
  return await runQueryAsync(`select * from dbo.prestadores where id_prestador = ${idPrestador};`);
}

export { getPrestadores, getPrestadorById };