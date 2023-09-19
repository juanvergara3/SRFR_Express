import { getEstados } from "../services/test.service";
import { Request, Response, NextFunction } from "express";

async function getEstadosControllerFunction(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {
        let result = await getEstados(Number(req.query.page));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
  };

export { getEstadosControllerFunction };