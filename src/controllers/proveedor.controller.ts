import { Request, Response, NextFunction } from "express";
import * as service from "../services/proveedor.service";

export async function getProveedoresController(req:Request, res:Response, next:NextFunction) {
    try {
        let result = await service.getProveedores();
        
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}

export async function getProveedorByIdController(req:Request, res:Response, next:NextFunction) {
    try {
        let idProveedor = req.query.idProveedor;

        let result = await service.getProveedorById(Number(idProveedor));
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(`Error executing query`);
        next(err);
    }
}
