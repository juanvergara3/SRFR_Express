import { Request, Response, NextFunction } from "express";
import * as service from "../services/activo.service";

export async function getActivosController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getActivos();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getActivosPendientesController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getActivosPendientes();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getActivosByGrupoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idGrupo = req.query.idGrupo;

        let result = await service.getActivosByGrupo(Number(idGrupo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getActivosByPeriodoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idPeriodo = req.query.id_periodo;

        let result = await service.getActivosByPeriodo(Number(idPeriodo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getActivosByEntregaController(req:Request, res:Response, next:NextFunction) {
    try {
        let idEntrega = req.query.id_entrega;

        let result = await service.getActivosByEntrega(Number(idEntrega));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function editActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.body.id_activo
        let numeroSerie = req.body.numero_serie;
        let modelo = req.body.modelo;
        let facturaCompra = req.body.factura_compra;
        let fechaCompra = req.body.fecha_compra;
        let valor = req.body.valor;
        let precioRenta = req.body.precio_renta;
        let idMarca = req.body.id_marca;
        let idProveedor = req.body.id_proveedor;
        let idPrestador = req.body.id_prestador;
        let idTipo = req.body.id_tipo;
        let idEstado = req.body.id_estado;
        let idGrupo = req.body.id_grupo;
        
        let result = await service.editActivo(idActivo, numeroSerie, modelo, facturaCompra, fechaCompra, valor, precioRenta, idMarca, idProveedor, idPrestador, idTipo, idEstado, idGrupo);

        res.json("Activo editado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function newActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let numeroSerie = req.body.numero_serie;
        let modelo = req.body.modelo;
        let facturaCompra = req.body.factura_compra;
        let fechaCompra = req.body.fecha_compra;
        let valor = req.body.valor;
        let precioRenta = req.body.precio_renta;
        let idMarca = req.body.id_marca;
        let idProveedor = req.body.id_proveedor;
        let idPrestador = req.body.id_prestador;
        let idTipo = req.body.id_tipo;
        let idEstado = req.body.id_estado;
        let idGrupo = req.body.id_grupo;
    
        let result = await service.newActivo(numeroSerie, modelo, facturaCompra, fechaCompra, valor, precioRenta, idMarca, idProveedor, idPrestador, idTipo, idEstado, idGrupo);

        res.json("Activo creado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
