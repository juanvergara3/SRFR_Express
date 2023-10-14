import { getActivos, getActivosByGrupo } from "../services/activo.service";
import { Request, Response, NextFunction } from "express";

async function getActivosController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {
        let result = await getActivos();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getActivosByGrupoController(req:Request, res:Response, next:NextFunction) {
    try {

        let idGrupo = req.query.idGrupo;

        let result = await getActivosByGrupo(Number(idGrupo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getActivosController, getActivosByGrupoController };
