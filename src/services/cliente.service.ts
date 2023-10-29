import { runQueryAsync, executeProcedureAsync } from "./db.service";
import { getOffset } from "../utils/helper.util";
import { generalConfig } from "../configs/general.config";

async function getClientes(page = 1) {

  const listPerPage = generalConfig.listPerPageFacturas;
  const offset = getOffset(page, listPerPage);
  
  return await runQueryAsync(`select * from dbo.clientes;`);
}

async function editCliente(idCliente: number, nit?: number, digitoVerificacion?: number, nombre?: string){

  return await runQueryAsync(
    `UPDATE dbo.clientes SET 
      nit = COALESCE(${nit ? `${nit}` : null}, nit), 
      digito_verificacion = ${digitoVerificacion ? digitoVerificacion : null},
      nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre)
    WHERE id_cliente = ${idCliente};`
    );
}

export { getClientes, editCliente };