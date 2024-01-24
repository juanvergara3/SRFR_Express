import { Request, Response, NextFunction } from "express";
import * as service from "../services/prestador.service";

export async function getPrestadoresController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getPrestadores();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getPrestadorByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idPrestador = req.query.idPrestador;

        let result = await service.getPrestadorById(Number(idPrestador));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
