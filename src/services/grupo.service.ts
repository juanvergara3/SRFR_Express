import { runQueryAsync } from "./db.service";

export async function getGrupos() {
  return await runQueryAsync(`select * from dbo.grupos;`);
}

export async function getGrupoById(idGrupo: number) {
  return await runQueryAsync(`select * from dbo.Grupos where id_Grupo = ${idGrupo};`);
}

export async function newGrupo(nombre: string) {
  return await runQueryAsync(
    `insert into grupos (nombre) values ('${nombre}');`
  );
}
