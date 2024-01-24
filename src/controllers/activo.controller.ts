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
