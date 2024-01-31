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

export async function newPeriodosBulkController(req:Request, res:Response, next:NextFunction) {
    try {
        let idFactura: number = req.body.id_factura;
        let fechaInicio: string = req.body.fecha_inicio;
        let fechaFin: string = req.body.fecha_fin;
        let idsActivos: number[] = req.body.ids_activos;
        
        let result = await service.newPeriodosBulk(idFactura, fechaInicio, fechaFin, idsActivos);

        res.json("Activos facturados con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
