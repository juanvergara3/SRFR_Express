import { runQueryAsync, executeProcedureAsync } from "./db.service";

async function getUbicaciones() {
  return await runQueryAsync(`select * from dbo.ubicaciones;`);
}

async function getUbicacionesByCliente(idCliente: number){
  return await runQueryAsync(`select * from dbo.ubicaciones where id_cliente = ${idCliente};`);
}

async function getUbicacionById(idUbicacion: number){
  return await runQueryAsync(`select * from dbo.ubicaciones where id_ubicacion = ${idUbicacion};`);
}

async function editUbicacion(idUbicacion: number, idCliente?: number, nombre?: string, direccion?: string, telefono?: string){

  return await runQueryAsync(
    `UPDATE dbo.ubicaciones SET 
      id_cliente = COALESCE(${idCliente ? `${idCliente}` : null}, id_cliente), 
      nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre),
      direccion = COALESCE(${direccion ? `'${direccion}'` : null}, direccion),
      telefono = ${telefono ? `'${telefono}'` : null}
    WHERE id_ubicacion = ${idUbicacion};`
    );
}

export { getUbicaciones, getUbicacionById, getUbicacionesByCliente, editUbicacion };
