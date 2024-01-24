import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getClientes() {
  return await runQueryAsync(`select * from dbo.clientes;`);
}

async function getClienteById(idCliente: number) {
  return await runQueryAsync(`select * from dbo.clientes where id_cliente = ${idCliente};`);
}

async function getClienteByUbicacion(idUbicacion: number){
  return await runQueryAsync(
    `SELECT Clientes.*
      FROM Clientes
      JOIN Ubicaciones ON Clientes.id_cliente = Ubicaciones.id_cliente
    WHERE Ubicaciones.id_ubicacion = ${idUbicacion};`);
}

async function editCliente(idCliente: number, nit?: number, digitoVerificacion?: number, nombre?: string) {

  return await runQueryAsync(
    `UPDATE dbo.clientes SET 
      nit = COALESCE(${nit ? `${nit}` : null}, nit), 
      digito_verificacion = ${digitoVerificacion ? digitoVerificacion : null},
      nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre)
    WHERE id_cliente = ${idCliente};`
    );
}

export { getClientes, getClienteById, editCliente, getClienteByUbicacion };
