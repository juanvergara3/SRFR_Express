import { Request, Response, NextFunction } from "express";
import * as service from "../services/grupo.service";

export async function getGruposController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getGrupos();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
