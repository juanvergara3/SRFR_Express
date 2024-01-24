import { Request, Response, NextFunction } from "express";
import * as service from "../services/estado.service";

export async function getEstadosController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getEstados();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getEstadoByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idEstado = req.query.idEstado;

        let result = await service.getEstadoById(Number(idEstado));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
