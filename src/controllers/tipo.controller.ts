import { getTipos, getTipoById } from "../services/tipo.service";
import { Request, Response, NextFunction } from "express";

async function getTiposController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await getTipos();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getTipoByIdController(req:Request, res:Response, next:NextFunction) {
    try {

        let idTipo = req.query.idTipo;

        let result = await getTipoById(Number(idTipo));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getTiposController, getTipoByIdController };