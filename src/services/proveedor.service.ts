import { runQueryAsync } from "./db.service";

export async function getProveedores() {
  return await runQueryAsync(`select * from dbo.proveedores;`);
}

export async function getProveedorById(idProveedor: number) {
  return await runQueryAsync(`select * from dbo.proveedores where id_proveedor = ${idProveedor};`);
}
