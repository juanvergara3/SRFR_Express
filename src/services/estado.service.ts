import { runQueryAsync } from "./db.service";

export async function getEstados() {
  return await runQueryAsync(`select * from dbo.estados;`);
}

export async function getEstadoById(idEstado: number) {
  return await runQueryAsync(`select * from dbo.estados where id_Estado = ${idEstado};`);
}
