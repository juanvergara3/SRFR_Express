import { Request, Response, NextFunction } from "express";
import * as service from "../services/factura.service";

export async function getFacturasController(req:Request, res:Response, next:NextFunction) { 
    try {
        let result = await service.getFacturas(1);
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getFacturaByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idFactura =  req.query.id_factura;

        let result = await service.getFacturaById(Number(idFactura));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getLatestFacturasController(req:Request, res:Response, next:NextFunction) {
    try {
        let cantidadFacturas =  req.query.cantidadFacturas;

        let result = await service.getLatestFacturas(Number(cantidadFacturas));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function newFacturaController(req:Request, res:Response, next:NextFunction) {
    try {
        let numeroFactura = req.body.numero_factura;
        let fechaGeneracion = req.body.fecha_generacion;
        
        let result = await service.newFactura(numeroFactura, fechaGeneracion);

        res.json("Factura creada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function editFacturaController(req:Request, res:Response, next:NextFunction) {
    try {
        let idFactura = req.body.id_factura;
        let numeroFactura = req.body.numero_factura;
        let fechaGeneracion = req.body.fecha_generacion;
        
        let result = await service.editFactura(idFactura, numeroFactura, fechaGeneracion);

        res.json("Factura editada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
