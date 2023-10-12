import { runQueryAsync, executeProcedureAsync } from "./db.service";
import { getOffset } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getUbicaciones(page = 1) {
  // const listPerPage = generalConfig.listPerPageFacturas;
  // const offset = getOffset(page, listPerPage);
  
  return await runQueryAsync(`select * from dbo.ubicaciones;`);
}

async function getUbicacionesByCliente(idCliente: number){
  return await runQueryAsync(`select * from dbo.ubicaciones where id_cliente = ${idCliente};`);
}

export { getUbicaciones, getUbicacionesByCliente };
