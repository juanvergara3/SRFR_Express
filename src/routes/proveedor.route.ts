import express, { Router } from "express";
import * as controller from "../controllers/proveedor.controller";

let proveedorRouter: Router =  express.Router();

proveedorRouter.get('/', controller.getProveedoresController);
proveedorRouter.get('/id/p/', controller.getProveedorByIdController);

export { proveedorRouter };
