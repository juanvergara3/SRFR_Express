import { getEntregasByActivo, getEntregasByResponsable, getEntregasByUbicacion, getEntregasByCliente, getLastEntregaByActivo } from "../services/entrega.service"
import { Request, Response, NextFunction } from "express";

async function getEntregasByActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.query.id_activo;

        let result = await getEntregasByActivo(Number(idActivo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getEntregasByResponsableController(req:Request, res:Response, next:NextFunction) {
    try {
        let idResponsable = req.query.id_responsable;

        let result = await getEntregasByResponsable(Number(idResponsable));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getEntregasByUbicacionController(req:Request, res:Response, next:NextFunction) {
    try {
        let idUbicacion = req.query.id_ubicacion;

        let result = await getEntregasByUbicacion(Number(idUbicacion));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getEntregasByClienteController(req:Request, res:Response, next:NextFunction) {
    try {
        let idCliente = req.query.id_cliente;

        let result = await getEntregasByCliente(Number(idCliente));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getLastEntregaByActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.query.id_activo;

        let result = await getLastEntregaByActivo(Number(idActivo));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getEntregasByActivoController, getEntregasByResponsableController, getEntregasByUbicacionController, getEntregasByClienteController, getLastEntregaByActivoController };
