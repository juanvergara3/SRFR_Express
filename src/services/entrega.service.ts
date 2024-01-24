import { runQueryAsync } from "./db.service";

export async function getEntregasByActivo(idActivo: number) {
    return await runQueryAsync(
        `SELECT e.*
            FROM entregas e
            INNER JOIN activos_entregas ae ON e.id_entrega = ae.id_entrega
        WHERE ae.id_activo = ${idActivo};`
    );
}

export async function getEntregasByResponsable(idResponsable: number) {
  return await runQueryAsync(
    `select * from entregas where id_responsable = ${idResponsable};`
  );
}

export async function getEntregasByUbicacion(idUbicacion: number) {
  return await runQueryAsync(
    `select * from entregas where id_ubicacion = ${idUbicacion};`
  );
}

export async function getEntregasByCliente(idCliente: number) {
  return await runQueryAsync(
    `select * from entregas where id_ubicacion in (
      select id_ubicacion from ubicaciones where id_cliente = ${idCliente}
    );`
  );
}

export async function getLastEntregaByActivo(idActivo: number) {
  return await runQueryAsync(
      `SELECT top 1 e.*
        FROM entregas e
        INNER JOIN activos_entregas ae ON e.id_entrega = ae.id_entrega
      WHERE (ae.id_activo = ${idActivo} and fecha_devolucion is NULL) order by fecha_entrega desc;`
  );
}

export async function newEntrega(idActivo: number, idResponsable: number, idUbicacion: number, fechaEntrega: string, fechaDevolucion?: string) {

  return await runQueryAsync(
    `insert into entregas (id_responsable, id_ubicacion, fecha_entrega, fecha_devolucion) values (${idResponsable}, ${idUbicacion}, '${fechaEntrega}', ${fechaDevolucion ? `'${fechaDevolucion}'` : null});
      DECLARE @PK int;
      SET @PK = SCOPE_IDENTITY();
    insert into activos_entregas (id_entrega, id_activo) values (@PK, ${idActivo});`
  );
}

export async function editEntrega(idEntrega: number, idResponsable?: number, idUbicacion?: number, fechaEntrega?: string, fechaDevolucion?: string) {

  return await runQueryAsync(
    `UPDATE entregas SET 
        id_responsable = COALESCE(${idResponsable ? idResponsable : null}, id_responsable), 
        id_ubicacion = COALESCE(${idUbicacion ? idUbicacion : null}, id_ubicacion), 
        fecha_entrega =  COALESCE(${fechaEntrega ? `'${fechaEntrega}'` : null}, fecha_entrega), 
        fecha_devolucion = ${fechaDevolucion ? `'${fechaDevolucion}'` : null}
    WHERE id_entrega = ${idEntrega};`
    );
}

// export async function deleteEntrega(idEntrega: number) { //según las reglas de integridad no se permite el borrado de entregas
    
//   return await runQueryAsync(
//     `delete from entregas where id_entrega = ${idEntrega};
//     delete from entregas where id_entrega = ${idEntrega};`
//   );
// }
