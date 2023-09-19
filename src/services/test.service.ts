import { runQueryAsync } from "./db.service";
import { getOffset, emptyOrRows } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getEstados(page = 1) {
  return await runQueryAsync(`SELECT * FROM SRFR_DB.dbo.tipos;`);
}

// function getEstados(page = 1){ //make this async somehow
//   const offset = getOffset(page, generalConfig.listPerPage);
//   const rows = runQueryAsync(
//     `SELECT id_estado, estado, color FROM SRFR_DB.dbo.estados; LIMIT ?,?`, 
//     [offset, generalConfig.listPerPage]
//   );
//   const data = emptyOrRows(rows);
//   const meta = {page};

//   return {
//     data,
//     meta
//   }
// }

export { getEstados };