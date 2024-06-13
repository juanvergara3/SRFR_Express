import { runQueryAsync } from "./db.service";

export async function getActivos() {
  return await runQueryAsync(`select * from dbo.activos;`);
}

export async function getActivosPendientes() {
  return await runQueryAsync(
    `DECLARE @current_date AS DATE = GETDATE();
    SELECT a.*
    FROM activos a
      LEFT JOIN activos_periodos ap ON a.id_activo = ap.id_activo
      LEFT JOIN periodos p ON p.id_periodo = ap.id_periodo
      INNER JOIN (
        SELECT ae.id_activo, e.id_entrega, e.fecha_devolucion
        FROM activos_entregas ae
          INNER JOIN entregas e ON e.id_entrega = ae.id_entrega
          INNER JOIN (
            SELECT id_activo, MAX(fecha_entrega) AS fecha_entrega_max
            FROM activos_entregas ae
              INNER JOIN entregas e ON e.id_entrega = ae.id_entrega
            GROUP BY id_activo
          ) AS f ON f.id_activo = ae.id_activo AND f.fecha_entrega_max = e.fecha_entrega
      ) AS e ON e.id_activo = a.id_activo
    WHERE a.id_estado = 1 AND (DATEDIFF(month, COALESCE(p.fecha_fin, @current_date), @current_date) >= 1 OR p.id_periodo IS NULL)
      AND e.fecha_devolucion IS NULL;`
  );
}

export async function getActivosByGrupo(idGrupo: number) {
  return await runQueryAsync(`select * from dbo.Activos where id_grupo = ${idGrupo};`);
}

export async function getActivosByPeriodo(idPeriodo: number) {
  return await runQueryAsync(
    `SELECT a.*
      FROM activos a
      INNER JOIN activos_periodos ap ON a.id_activo = ap.id_activo
    WHERE ap.id_periodo = ${idPeriodo};`
  );
}

export async function getActivosByEntrega(idEntrega: number) {
  return await runQueryAsync(
    `SELECT a.*
      FROM activos a
      INNER JOIN activos_entregas ap ON a.id_activo = ap.id_activo
    WHERE ap.id_entrega = ${idEntrega};`
  );
}

export async function editActivo(idActivo: number, numeroSerie?: string, modelo?: string, facturaCompra?: string, fechaCompra?: string, valor?: number, precioRenta?: number, 
                                  idMarca?: number, idProveedor?: number, idPrestador?: number, idTipo?: number, idEstado?: number, idGrupo?: number) {
  return await runQueryAsync(
    `UPDATE dbo.activos SET 
      numero_serie = COALESCE(${numeroSerie ? `${numeroSerie}` : null}, numero_serie), 
      modelo = COALESCE(${modelo ? `'${modelo}'` : null}, modelo),
      factura_compra = COALESCE(${facturaCompra ? `'${facturaCompra}'` : null}, factura_compra),
      valor = COALESCE(${valor ? `${valor}` : null}, valor),
      precio_renta = COALESCE(${precioRenta ? `${precioRenta}` : null}, precio_renta),
      id_marca = COALESCE(${idMarca ? `${idMarca}` : null}, id_marca), 
      id_proveedor = COALESCE(${idProveedor ? `${idProveedor}` : null}, id_proveedor), 
      id_prestador = COALESCE(${idPrestador ? `${idPrestador}` : null}, id_prestador), 
      id_tipo = COALESCE(${idTipo ? `${idTipo}` : null}, id_tipo), 
      id_estado = COALESCE(${idEstado ? `${idEstado}` : null}, id_estado), 
      id_grupo = COALESCE(${idGrupo ? `${idGrupo}` : null}, id_grupo) 
    WHERE id_activo = ${idActivo};`
    );
}

export async function newActivo(numeroSerie: string, modelo: string, facturaCompra: string, fechaCompra: string, valor: number, precioRenta: number, 
                                idMarca: number, idProveedor: number, idPrestador: number, idTipo: number, idEstado: number, idGrupo?: number) {
  return await runQueryAsync(
    `insert into activos 
      (numero_serie, modelo, factura_compra, fecha_compra, valor, precio_renta, 
      id_marca, id_proveedor, id_prestador, id_tipo, id_estado, id_grupo)
    values 
      ('${numeroSerie}', '${modelo}', '${facturaCompra}', '${fechaCompra}', ${valor}, ${precioRenta}, 
      ${idMarca}, ${idProveedor}, ${idPrestador}, ${idTipo}, ${idEstado}, ${idGrupo ? `${idGrupo}` : null});`
  );
}
