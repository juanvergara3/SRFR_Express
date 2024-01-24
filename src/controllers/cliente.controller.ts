import { Request, Response, NextFunction } from "express";
import * as service from "../services/cliente.service";

export async function getClientesController(req:Request, res:Response, next:NextFunction) {
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await service.getClientes();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getClienteByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idCliente = req.query.idCliente;

        let result = await service.getClienteById(Number(idCliente));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getClienteByUbicacionController(req:Request, res:Response, next:NextFunction) {
    try {
        let idUbicacion = req.query.id_ubicacion;

        let result = await service.getClienteByUbicacion(Number(idUbicacion));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function editClienteController(req:Request, res:Response, next:NextFunction) {
    try {
        let idCliente = req.body.id_cliente;
        let nit = req.body.nit;
        let digitoVerificacion = req.body.digito_verificacion;
        let nombre = req.body.nombre;
        
        let result = await service.editCliente(idCliente, nit, digitoVerificacion, nombre);

        res.json("Cliente editado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function newClienteController(req:Request, res:Response, next:NextFunction) {
    try {
        let nombre: string = req.body.nombre;
        let nit: number = req.body.nit;
        let digitoVerificacion: number = req.body.digito_verificacion;
        
        let result = await service.newCliente(nombre, nit, digitoVerificacion);

        res.json("Cliente creado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
