import { runQueryAsync } from "./db.service";

export async function getUbicaciones() {
  return await runQueryAsync(`select * from dbo.ubicaciones;`);
}

export async function getUbicacionesByCliente(idCliente: number){
  return await runQueryAsync(`select * from dbo.ubicaciones where id_cliente = ${idCliente};`);
}

export async function getUbicacionById(idUbicacion: number){
  return await runQueryAsync(`select * from dbo.ubicaciones where id_ubicacion = ${idUbicacion};`);
}

export async function editUbicacion(idUbicacion: number, idCliente?: number, nombre?: string, direccion?: string, telefono?: string){

  return await runQueryAsync(
    `UPDATE dbo.ubicaciones SET 
      id_cliente = COALESCE(${idCliente ? `${idCliente}` : null}, id_cliente), 
      nombre = COALESCE(${nombre ? `'${nombre}'` : null}, nombre),
      direccion = COALESCE(${direccion ? `'${direccion}'` : null}, direccion),
      telefono = ${telefono ? `'${telefono}'` : null}
    WHERE id_ubicacion = ${idUbicacion};`
    );
}

export async function newUbicacion(idCliente: number, nombre: string, direccion: string, telefono?: string) {
  return await runQueryAsync(
    `insert into ubicaciones (id_cliente, nombre, direccion, telefono) values (${idCliente}, '${nombre}', '${direccion}',  ${telefono ? `'${telefono}'` : null});`
  );
}
