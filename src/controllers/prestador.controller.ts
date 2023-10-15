import { getPrestadores, getPrestadorById } from "../services/prestador.service";
import { Request, Response, NextFunction } from "express";

async function getPrestadoresController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await getPrestadores();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getPrestadorByIdController(req:Request, res:Response, next:NextFunction) {
    try {

        let idPrestador = req.query.idPrestador;

        let result = await getPrestadorById(Number(idPrestador));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getPrestadoresController, getPrestadorByIdController };