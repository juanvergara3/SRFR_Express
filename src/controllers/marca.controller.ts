import { getMarcas, getMarcaById } from "../services/marca.service";
import { Request, Response, NextFunction } from "express";

async function getMarcasController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await getMarcas();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getMarcaByIdController(req:Request, res:Response, next:NextFunction) {
    try {

        let idMarca = req.query.idMarca;

        let result = await getMarcaById(Number(idMarca));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getMarcasController, getMarcaByIdController };