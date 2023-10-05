import { getFacturas, newFactura, editFactura } from "../services/factura.service";
import { Request, Response, NextFunction } from "express";

async function getFacturasController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await getFacturas(1);
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

async function newFacturaController(req:Request, res:Response, next:NextFunction) { //make this async somehow
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

async function editFacturaController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {

        let idFactura = req.body.id_factura
        let numeroFactura = req.body.numero_factura;
        let fechaGeneracion = req.body.fecha_generacion;
        
        let result = await editFactura(idFactura, numeroFactura, fechaGeneracion);

        res.json("Factura editada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

export { getFacturasController, newFacturaController, editFacturaController };