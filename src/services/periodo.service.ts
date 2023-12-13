import { executeProcedureAsync, runQueryAsync } from "./db.service";

async function getPeriodosByActivo(idActivo: number) {
    return await runQueryAsync(
        `SELECT p.*
            FROM periodos p
            INNER JOIN activos_periodos ap ON p.id_periodo = ap.id_periodo
        WHERE ap.id_activo = ${idActivo};`
    );
}

async function getLastPeriodoByActivo(idActivo: number) {
    return await runQueryAsync(
        `SELECT top 1 p.*
            FROM periodos p
            INNER JOIN activos_periodos ap ON p.id_periodo = ap.id_periodo
        WHERE ap.id_activo = ${idActivo} order by fecha_fin desc;`
    );
}

async function getPeriodosByFactura(idFactura: number) {
    return await runQueryAsync(
        `select * from periodos where id_factura = ${idFactura};`
    );
}

// async function editPeriodo(idPeriodo: number, idFactura?: number, fechaInicio?: string, fechaFin?: string) {

//   return await runQueryAsync(
//     `UPDATE peridos SET 
//         id_factura = COALESCE(${idFactura ? idFactura : null}, id_factura), 
//         fecha_inicio =  COALESCE(${fechaInicio ? `'${fechaInicio}'` : null}, fecha_inicio), 
//         fecha_fin =  COALESCE(${fechaFin ? `'${fechaFin}'` : null}, fecha_fin)
//     WHERE id_entrega = ${idPeriodo};`
//     );
// }

export { getPeriodosByActivo, getLastPeriodoByActivo, getPeriodosByFactura };
