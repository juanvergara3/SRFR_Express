import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getClientes() {
  return await runQueryAsync(`select * from dbo.clientes;`);
}

async function getClienteById(idCliente: number){
  return await runQueryAsync(`select * from dbo.clientes where id_cliente = ${idCliente};`);
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

export { getClientes, getClienteById, editCliente };
