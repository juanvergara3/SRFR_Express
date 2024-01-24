import { Request, Response, NextFunction } from "express";
import * as service from "../services/marca.service";

export async function getMarcasController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getMarcas();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getMarcaByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idMarca = req.query.idMarca;

        let result = await service.getMarcaById(Number(idMarca));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
