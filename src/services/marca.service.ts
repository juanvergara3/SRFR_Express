import { runQueryAsync } from "./db.service";

export async function getMarcas() {
  return await runQueryAsync(`select * from dbo.marcas;`);
}

export async function getMarcaById(idMarca: number) {
  return await runQueryAsync(`select * from dbo.marcas where id_marca = ${idMarca};`);
}
