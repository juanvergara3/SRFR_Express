import express, { Router } from "express";
import { getFacturasController } from "../controllers/factura.controller";

let facturaRouter: Router =  express.Router();

facturaRouter.get('/', getFacturasController);

export { facturaRouter };
