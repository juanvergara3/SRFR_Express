import { getEstados, getEstadoById } from "../services/estado.service";
import { Request, Response, NextFunction } from "express";

async function getEstadosController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await getEstados();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getEstadoByIdController(req:Request, res:Response, next:NextFunction) {
    try {

        let idEstado = req.query.idEstado;

        let result = await getEstadoById(Number(idEstado));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getEstadosController, getEstadoByIdController };