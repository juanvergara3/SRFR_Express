import express, { Router } from "express";
import { getFacturasController, getFacturaByIdController, getLatestFacturasController, newFacturaController, editFacturaController } from "../controllers/factura.controller";

let facturaRouter: Router =  express.Router();

facturaRouter.get('/', getFacturasController);
facturaRouter.post('/', newFacturaController);
facturaRouter.patch('/', editFacturaController);

facturaRouter.get('/id/p/', getFacturaByIdController);
facturaRouter.get('/latest/p/', getLatestFacturasController);

export { facturaRouter };
