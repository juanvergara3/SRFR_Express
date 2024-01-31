import { runQueryAsync } from "./db.service";

export async function getPeriodosByActivo(idActivo: number) {
    return await runQueryAsync(
        `SELECT p.*
            FROM periodos p
            INNER JOIN activos_periodos ap ON p.id_periodo = ap.id_periodo
        WHERE ap.id_activo = ${idActivo};`
    );
}

export async function getLastPeriodoByActivo(idActivo: number) {
    return await runQueryAsync(
        `SELECT top 1 p.*
            FROM periodos p
            INNER JOIN activos_periodos ap ON p.id_periodo = ap.id_periodo
        WHERE ap.id_activo = ${idActivo} order by fecha_fin desc;`
    );
}

export async function getPeriodosByFactura(idFactura: number) {
    return await runQueryAsync(
        `select * from periodos where id_factura = ${idFactura};`
    );
}

export async function newPeriodosBulk(idFactura: number, fechaInicio: string, fechaFin: string, idsActivos: number[]) {

    let query = `DECLARE @PK int;
        insert into periodos (id_factura, fecha_inicio, fecha_fin) values (${idFactura}, '${fechaInicio}', '${fechaFin}');
        SET @PK = SCOPE_IDENTITY();
        insert into activos_periodos (id_periodo, id_activo) values `

    for (const idActivo of idsActivos) {
        query = query.concat(`(@PK, ${idActivo}), `);
    }

    query = query.slice(0, query.length - 2).concat(';');

    return await runQueryAsync(query);
}

// export async function editPeriodo(idPeriodo: number, idFactura?: number, fechaInicio?: string, fechaFin?: string) {

//   return await runQueryAsync(
//     `UPDATE peridos SET 
//         id_factura = COALESCE(${idFactura ? idFactura : null}, id_factura), 
//         fecha_inicio =  COALESCE(${fechaInicio ? `'${fechaInicio}'` : null}, fecha_inicio), 
//         fecha_fin =  COALESCE(${fechaFin ? `'${fechaFin}'` : null}, fecha_fin)
//     WHERE id_entrega = ${idPeriodo};`
//     );
// }
