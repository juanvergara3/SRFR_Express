import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getProveedores() {
  return await runQueryAsync(`select * from dbo.proveedores;`);
}

async function getProveedorById(idProveedor: number) {
  return await runQueryAsync(`select * from dbo.proveedores where id_proveedor = ${idProveedor};`);
}

export { getProveedores, getProveedorById };