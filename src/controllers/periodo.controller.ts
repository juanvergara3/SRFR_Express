import { getPeriodosByActivo } from "../services/periodo.service";
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

export { getPeriodosByActivoController };
