import { getUbicaciones, getUbicacionesByCliente, editUbicacion } from "../services/ubicacion.service";
import { Request, Response, NextFunction } from "express";

async function getUbicacionesController(req:Request, res:Response, next:NextFunction) { //make this async somehow
    try {
        //let result = await getEstados(Number(req.query.page)); //this req.query.page needs to be studied
        let result = await getUbicaciones(1);
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getUbicacionesByClienteController(req:Request, res:Response, next:NextFunction) {
    try {

        let idCliente = req.query.idCliente;

        let result = await getUbicacionesByCliente(Number(idCliente));
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function editUbicacionController(req:Request, res:Response, next:NextFunction) {
    try {

        let idUbicacion =  req.body.id_ubicacion;
        let idCliente = req.body.id_cliente;
        let nombre = req.body.nombre;
        let direccion = req.body.direccion;
        let telefono = req.body.telefono;
        
        let result = await editUbicacion(idUbicacion, idCliente, nombre, direccion, telefono);

        res.json("Ubicación editada con éxito.");
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
};


export { getUbicacionesController, getUbicacionesByClienteController,editUbicacionController };
