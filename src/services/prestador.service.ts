import { runQueryAsync} from "./db.service";

export async function getPrestadores() {
  return await runQueryAsync(`select * from dbo.prestadores;`);
}

export async function getPrestadorById(idPrestador: number) {
  return await runQueryAsync(`select * from dbo.prestadores where id_prestador = ${idPrestador};`);
}
