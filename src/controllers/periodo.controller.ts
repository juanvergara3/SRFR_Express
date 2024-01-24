import { Request, Response, NextFunction } from "express";
import * as service from "../services/periodo.service";

export async function getPeriodosByActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.query.id_activo;

        let result = await service.getPeriodosByActivo(Number(idActivo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getLastPeriodoByActivoController(req:Request, res:Response, next:NextFunction) {
    try {
        let idActivo = req.query.id_activo;

        let result = await service.getLastPeriodoByActivo(Number(idActivo));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getPeriodosByFacturaController(req:Request, res:Response, next:NextFunction) {
    try {
        let idFactura = req.query.id_factura;

        let result = await service.getPeriodosByFactura(Number(idFactura));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
