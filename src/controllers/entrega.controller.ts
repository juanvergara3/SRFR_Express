import { Request, Response, NextFunction } from "express";
import * as service from "../services/entrega.service"

export async function getEntregasByActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.query.id_activo;

        let result = await service.getEntregasByActivo(Number(idActivo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getEntregasByResponsableController(req:Request, res:Response, next:NextFunction) {
    try {
        let idResponsable = req.query.id_responsable;

        let result = await service.getEntregasByResponsable(Number(idResponsable));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getEntregasByUbicacionController(req:Request, res:Response, next:NextFunction) {
    try {
        let idUbicacion = req.query.id_ubicacion;

        let result = await service.getEntregasByUbicacion(Number(idUbicacion));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getEntregasByClienteController(req:Request, res:Response, next:NextFunction) {
    try {
        let idCliente = req.query.id_cliente;

        let result = await service.getEntregasByCliente(Number(idCliente));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getLastEntregaByActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.query.id_activo;

        let result = await service.getLastEntregaByActivo(Number(idActivo));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function newEntregaController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo: number = req.body.id_activo;
        let idResponsable: number = req.body.id_responsable;
        let idUbicacion: number = req.body.id_ubicacion;
        let fechaEntrega: string = req.body.fecha_entrega;
        let fechaDevolucion: string = req.body.fecha_devolucion;
        
        let result = await service.newEntrega(idActivo, idResponsable, idUbicacion, fechaEntrega, fechaDevolucion);

        res.json("Entrega creada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
