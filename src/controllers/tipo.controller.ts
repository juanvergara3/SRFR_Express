import { Request, Response, NextFunction } from "express";
import * as service from "../services/tipo.service";

export async function getTiposController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getTipos();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getTipoByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idTipo = req.query.idTipo;

        let result = await service.getTipoById(Number(idTipo));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
