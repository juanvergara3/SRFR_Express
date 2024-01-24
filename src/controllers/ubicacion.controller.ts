import { Request, Response, NextFunction } from "express";
import * as service from "../services/ubicacion.service";

export async function getUbicacionesController(req:Request, res:Response, next:NextFunction) {
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await service.getUbicaciones();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getUbicacionByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idUbicacion = req.query.idUbicacion;

        let result = await service.getUbicacionById(Number(idUbicacion));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getUbicacionesByClienteController(req:Request, res:Response, next:NextFunction) {
    try {
        let idCliente = req.query.idCliente;

        let result = await service.getUbicacionesByCliente(Number(idCliente));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function editUbicacionController(req:Request, res:Response, next:NextFunction) {
    try {
        let idUbicacion =  req.body.id_ubicacion;
        let idCliente = req.body.id_cliente;
        let nombre = req.body.nombre;
        let direccion = req.body.direccion;
        let telefono = req.body.telefono;
        
        let result = await service.editUbicacion(idUbicacion, idCliente, nombre, direccion, telefono);

        res.json("Ubicación editada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
