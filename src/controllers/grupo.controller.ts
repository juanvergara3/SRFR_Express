import { getGrupos } from "../services/grupo.service";
import { Request, Response, NextFunction } from "express";

async function getGruposController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await getGrupos();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getGruposController };