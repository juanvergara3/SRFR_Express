import { runQueryAsync } from "./db.service";

export async function getClientes() {
  return await runQueryAsync(`select * from dbo.clientes;`);
}

export async function getClienteById(idCliente: number) {
  return await runQueryAsync(`select * from dbo.clientes where id_cliente = ${idCliente};`);
}

export async function getClienteByUbicacion(idUbicacion: number){
  return await runQueryAsync(
    `SELECT Clientes.*
      FROM Clientes
      JOIN Ubicaciones ON Clientes.id_cliente = Ubicaciones.id_cliente
    WHERE Ubicaciones.id_ubicacion = ${idUbicacion};`);
}

export async function editCliente(idCliente: number, nit?: number, digitoVerificacion?: number, nombre?: string) {
  return await runQueryAsync(
    `UPDATE dbo.clientes SET 
      nit = COALESCE(${nit ? `${nit}` : null}, nit), 
      digito_verificacion = ${digitoVerificacion ? digitoVerificacion : null},
      nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre)
    WHERE id_cliente = ${idCliente};`
    );
}

export async function newCliente(nombre: string, nit: number, digitoVerificacion?: number) {
  return await runQueryAsync(
    `insert into clientes (nombre, nit, digito_verificacion) values ('${nombre}', ${nit}, ${digitoVerificacion ? `${digitoVerificacion}` : null});`
  );
}
