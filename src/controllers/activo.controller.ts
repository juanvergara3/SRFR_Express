import { getActivos, getActivosPendientes, getActivosByGrupo, getActivosByPeriodo, getActivosByEntrega } from "../services/activo.service";
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

async function getActivosPendientesController(req:Request, res:Response, next:NextFunction){
    try {
        let result = await getActivosPendientes();
        
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

async function getActivosByPeriodoController(req:Request, res:Response, next:NextFunction) {
    try {

        let idPeriodo = req.query.id_periodo;

        let result = await getActivosByPeriodo(Number(idPeriodo));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getActivosByEntregaController(req:Request, res:Response, next:NextFunction) {
    try {

        let idEntrega = req.query.id_entrega;

        let result = await getActivosByEntrega(Number(idEntrega));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getActivosController, getActivosPendientesController, getActivosByGrupoController, getActivosByPeriodoController, getActivosByEntregaController };
