import express, { Router } from "express";
import * as controller from "../controllers/factura.controller";

let facturaRouter: Router =  express.Router();

facturaRouter.get('/', controller.getFacturasController);
facturaRouter.post('/', controller.newFacturaController);
facturaRouter.patch('/', controller.editFacturaController);

facturaRouter.get('/id/p/', controller.getFacturaByIdController);
facturaRouter.get('/latest/p/', controller.getLatestFacturasController);

export { facturaRouter };
