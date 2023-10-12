import { runQueryAsync, executeProcedureAsync } from "./db.service";
import { getOffset } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getClientes(page = 1) {

  const listPerPage = generalConfig.listPerPageFacturas;
  const offset = getOffset(page, listPerPage);
  
  return await runQueryAsync(`select * from dbo.clientes;`);
}

export { getClientes };