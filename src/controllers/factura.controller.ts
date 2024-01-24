import { getFacturas, getFacturaById, getLatestFacturas, newFactura, editFactura } from "../services/factura.service";
import { Request, Response, NextFunction } from "express";

async function getFacturasController(req:Request, res:Response, next:NextFunction) { 
    try {
        let result = await getFacturas(1);
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

async function getFacturaByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idFactura =  req.query.id_factura;

        let result = await getFacturaById(Number(idFactura));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getLatestFacturasController(req:Request, res:Response, next:NextFunction) {
    try {
        let cantidadFacturas =  req.query.cantidadFacturas;

        let result = await getLatestFacturas(Number(cantidadFacturas));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function newFacturaController(req:Request, res:Response, next:NextFunction) {
    try {

        let numeroFactura = req.body.numero_factura;
        let fechaGeneracion = req.body.fecha_generacion;
        
        let result = await newFactura(numeroFactura, fechaGeneracion);

        res.json("Factura creada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

async function editFacturaController(req:Request, res:Response, next:NextFunction) {
    try {

        let idFactura = req.body.id_factura;
        let numeroFactura = req.body.numero_factura;
        let fechaGeneracion = req.body.fecha_generacion;
        
        let result = await editFactura(idFactura, numeroFactura, fechaGeneracion);

        res.json("Factura editada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

export { getFacturasController, getFacturaByIdController, getLatestFacturasController, newFacturaController, editFacturaController };
