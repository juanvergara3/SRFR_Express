import { getClientes, editCliente } from "../services/cliente.service";
import { Request, Response, NextFunction } from "express";

async function getClientesController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await getClientes(1);
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

async function editClienteController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {

        let idCliente = req.body.id_cliente;
        let nit = req.body.nit;
        let digitoVerificacion = req.body.digito_verificacion;
        let nombre = req.body.nombre;
        
        let result = await editCliente(idCliente, nit, digitoVerificacion, nombre);

        res.json("Cliente editado con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};

export { getClientesController, editClienteController };