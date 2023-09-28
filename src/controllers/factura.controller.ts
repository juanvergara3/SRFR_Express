import { getFacturas, newFactura } from "../services/factura.service";
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

        let numero= req.body.numero_factura;
        let fecha = req.body.fecha_generacion;
        
        let result = await newFactura(numero, fecha);

        res.json("Factura creada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

export { getFacturasController, newFacturaController };