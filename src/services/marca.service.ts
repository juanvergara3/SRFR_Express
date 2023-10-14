import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getMarcas() {
  return await runQueryAsync(`select * from dbo.marcas;`);
}

async function getMarcaById(idMarca: number) {
  return await runQueryAsync(`select * from dbo.marcas where id_marca = ${idMarca};`);
}

export { getMarcas, getMarcaById };