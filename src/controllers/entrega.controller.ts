import { getEntregasByActivo } from "../services/entrega.service"
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

export { getEntregasByActivoController };
