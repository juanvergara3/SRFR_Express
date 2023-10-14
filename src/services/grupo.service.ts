import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getGrupos() {
  
  return await runQueryAsync(`select * from dbo.grupos;`);
}

export { getGrupos};