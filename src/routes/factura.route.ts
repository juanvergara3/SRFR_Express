import express, { Router } from "express";
import { getFacturasController, newFacturaController } from "../controllers/factura.controller";

let facturaRouter: Router =  express.Router();

facturaRouter.get('/', getFacturasController);
facturaRouter.post('/', newFacturaController);

export { facturaRouter };
