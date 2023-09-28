import { getUbicaciones } from "../services/ubicacion.service";
import { Request, Response, NextFunction } from "express";

async function getUbicacionesController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await getUbicaciones(1);
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
  };

export { getUbicacionesController };