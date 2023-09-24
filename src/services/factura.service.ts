import { executeProcedureAsync } from "./db.service";
import { getOffset } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getFacturas(page = 1) {

  const listPerPage = generalConfig.listPerPageFacturas;
  const offset = getOffset(page, listPerPage);
  
  return await executeProcedureAsync(`dbo.GetFacturas`, [
    {name: 'offsetParameter', value: offset }, 
    {name: 'listsPerPageParameter', value: listPerPage }
  ]);
}

export { getFacturas };