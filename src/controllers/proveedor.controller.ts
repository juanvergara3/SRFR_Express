import { getProveedores, getProveedorById } from "../services/proveedor.service";
import { Request, Response, NextFunction } from "express";

async function getProveedoresController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await getProveedores();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

async function getProveedorByIdController(req:Request, res:Response, next:NextFunction) {
    try {

        let idProveedor = req.query.idProveedor;

        let result = await getProveedorById(Number(idProveedor));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export { getProveedoresController, getProveedorByIdController };