import { getResponsables, getResponsableById, editResponsable } from "../services/responsable.service";
import { Request, Response, NextFunction } from "express";

async function getResponsablesController(req:Request, res:Response, next:NextFunction) {
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await getResponsables();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getResponsableByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idResponsable = req.query.idResponsable;

        let result = await getResponsableById(Number(idResponsable));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function editResponsableController(req:Request, res:Response, next:NextFunction) {
    try {

        let idResponsable = req.body.id_responsable;
        let nombre = req.body.nombre;
        let cedula = req.body.cedula;
        let telefono = req.body.telefono;
        let correo = req.body.correo;
        
        let result = await editResponsable(idResponsable, nombre, cedula, telefono, correo);

        res.json("Responsable editado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getResponsablesController, getResponsableByIdController, editResponsableController };
