import { getPeriodosByActivo, getLastPeriodoByActivo, getPeriodosByFactura } from "../services/periodo.service";
import { Request, Response, NextFunction } from "express";

async function getPeriodosByActivoController(req:Request, res:Response, next:NextFunction) {
    try {

        let idActivo = req.query.id_activo;

        let result = await getPeriodosByActivo(Number(idActivo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getLastPeriodoByActivoController(req:Request, res:Response, next:NextFunction) {
    try {

        let idActivo = req.query.id_activo;

        let result = await getLastPeriodoByActivo(Number(idActivo));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getPeriodosByFacturaController(req:Request, res:Response, next:NextFunction) {
    try {

        let idFactura = req.query.id_factura;

        let result = await getPeriodosByFactura(Number(idFactura));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getPeriodosByActivoController, getLastPeriodoByActivoController, getPeriodosByFacturaController };
