import express, { Router } from "express";
import { getProveedoresController, getProveedorByIdController } from "../controllers/proveedor.controller";

let proveedorRouter: Router =  express.Router();

proveedorRouter.get('/', getProveedoresController);
proveedorRouter.get('/p/', getProveedorByIdController);

export { proveedorRouter };
