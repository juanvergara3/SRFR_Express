import { runQueryAsync } from "./db.service";

export async function getTipos() {
  return await runQueryAsync(`select * from dbo.tipos;`);
}

export async function getTipoById(idTipo: number) {
  return await runQueryAsync(`select * from dbo.tipos where id_tipo = ${idTipo};`);
}
