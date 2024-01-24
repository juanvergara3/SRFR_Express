import { Request, Response, NextFunction } from "express";
import * as service from "../services/responsable.service";

export async function getResponsablesController(req:Request, res:Response, next:NextFunction) {
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await service.getResponsables();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getResponsableByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idResponsable = req.query.idResponsable;

        let result = await service.getResponsableById(Number(idResponsable));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function editResponsableController(req:Request, res:Response, next:NextFunction) {
    try {
        let idResponsable = req.body.id_responsable;
        let nombre = req.body.nombre;
        let cedula = req.body.cedula;
        let telefono = req.body.telefono;
        let correo = req.body.correo;
        
        let result = await service.editResponsable(idResponsable, nombre, cedula, telefono, correo);

        res.json("Responsable editado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function newResponsableController(req:Request, res:Response, next:NextFunction) {
    try {

        let nombre = req.body.nombre;
        let cedula = req.body.cedula;
        let telefono = req.body.telefono;
        let correo = req.body.correo;
        
        let result = await service.newResponsable(nombre, cedula, telefono, correo);

        res.json("Responsable creado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
