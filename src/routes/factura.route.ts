import express, { Router } from "express";
import { getFacturasController, newFacturaController, editFacturaController } from "../controllers/factura.controller";

let facturaRouter: Router =  express.Router();

facturaRouter.get('/', getFacturasController);
facturaRouter.post('/', newFacturaController);
facturaRouter.patch('/',editFacturaController);

export { facturaRouter };
