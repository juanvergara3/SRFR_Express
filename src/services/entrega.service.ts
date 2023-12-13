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

async function newEntrega(idEntrega: number, idResponsable?: number, idUbicacion?: number, fechaEntrada?: string, fechaSalida?: string, idActivo?: number) { // NOT DONE

  return await runQueryAsync(
    `insert into entregas (id_responsable, id_ubicacion, fecha_entrada, fecha_salida) values (${idResponsable}, ${idUbicacion}, '${fechaEntrada}', ${fechaSalida ? `'${fechaSalida}'` : null});
    insert into activos_entregas (id_entrega, id_activo) values (${idEntrega}, ${idActivo});`
  );
}

async function editEntrega(idEntrega: number, idResponsable?: number, idUbicacion?: number, fechaEntrada?: string, fechaSalida?: string) {

  return await runQueryAsync(
    `UPDATE entregas SET 
        id_responsable = COALESCE(${idResponsable ? idResponsable : null}, id_responsable), 
        id_ubicacion = COALESCE(${idUbicacion ? idUbicacion : null}, id_ubicacion), 
        fecha_entrada =  COALESCE(${fechaEntrada ? `'${fechaEntrada}'` : null}, fecha_entrada), 
        fecha_salida = ${fechaSalida ? `'${fechaSalida}'` : null}
    WHERE id_entrega = ${idEntrega};`
    );
}

// async function deleteEntrega(idEntrega: number) { //según las reglas de integridad no se permite el borrado de entregas
    
//   return await runQueryAsync(
//     `delete from entregas where id_entrega = ${idEntrega};
//     delete from entregas where id_entrega = ${idEntrega};`
//   );
// }

export { getEntregasByActivo, getEntregasByResponsable, getEntregasByUbicacion, getEntregasByCliente, newEntrega, editEntrega };
