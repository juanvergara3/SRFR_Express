import { executeProcedureAsync, runQueryAsync } from "./db.service";

async function getEntregasByActivo(idActivo: number) {
    return await runQueryAsync(
        `SELECT e.*
            FROM entregas e
            INNER JOIN activos_entregas ae ON e.id_entrega = ae.id_entrega
        WHERE ae.id_activo = ${idActivo};`
    );
}

async function getEntregasByResponsable(idResponsable: number) {
  return await runQueryAsync(
    `select * from entregas where id_responsable = ${idResponsable};`
  );
}

async function getEntregasByUbicacion(idUbicacion: number) {
  return await runQueryAsync(
    `select * from entregas where id_ubicacion = ${idUbicacion};`
  );
}

async function getEntregasByCliente(idCliente: number) {
  return await runQueryAsync(
    `select * from entregas where id_ubicacion in (
      select id_ubicacion from ubicaciones where id_cliente = ${idCliente}
    );`
  );
}

async function getLastEntregaByActivo(idActivo: number) {
  return await runQueryAsync(
      `SELECT top 1 e.*
        FROM entregas e
        INNER JOIN activos_entregas ae ON e.id_entrega = ae.id_entrega
      WHERE (ae.id_activo = ${idActivo} and fecha_devolucion is NULL) order by fecha_entrega desc;`
  );
}

async function newEntrega(idEntrega: number, idResponsable?: number, idUbicacion?: number, fechaEntrega?: string, fechaDevolucion?: string, idActivo?: number) { // NOT DONE

  return await runQueryAsync(
    `insert into entregas (id_responsable, id_ubicacion, fecha_entrega, fecha_devolucion) values (${idResponsable}, ${idUbicacion}, '${fechaEntrega}', ${fechaDevolucion ? `'${fechaDevolucion}'` : null});
    insert into activos_entregas (id_entrega, id_activo) values (${idEntrega}, ${idActivo});`
  );
}

async function editEntrega(idEntrega: number, idResponsable?: number, idUbicacion?: number, fechaEntrega?: string, fechaDevolucion?: string) {

  return await runQueryAsync(
    `UPDATE entregas SET 
        id_responsable = COALESCE(${idResponsable ? idResponsable : null}, id_responsable), 
        id_ubicacion = COALESCE(${idUbicacion ? idUbicacion : null}, id_ubicacion), 
        fecha_entrega =  COALESCE(${fechaEntrega ? `'${fechaEntrega}'` : null}, fecha_entrega), 
        fecha_devolucion = ${fechaDevolucion ? `'${fechaDevolucion}'` : null}
    WHERE id_entrega = ${idEntrega};`
    );
}

// async function deleteEntrega(idEntrega: number) { //según las reglas de integridad no se permite el borrado de entregas
    
//   return await runQueryAsync(
//     `delete from entregas where id_entrega = ${idEntrega};
//     delete from entregas where id_entrega = ${idEntrega};`
//   );
// }

export { getEntregasByActivo, getEntregasByResponsable, getEntregasByUbicacion, getEntregasByCliente, getLastEntregaByActivo, newEntrega, editEntrega };
