import { runQueryAsync } from "./db.service";

export async function getGrupos() {
  return await runQueryAsync(`select * from dbo.grupos;`);
}
