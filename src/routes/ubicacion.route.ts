import express, { Router } from "express";
import * as controller from "../controllers/ubicacion.controller";

let ubicacionRouter: Router =  express.Router();

ubicacionRouter.get('/', controller.getUbicacionesController);
ubicacionRouter.get('/id/p/', controller.getUbicacionByIdController);
ubicacionRouter.get('/p/', controller.getUbicacionesByClienteController);
ubicacionRouter.patch('/', controller.editUbicacionController);

export { ubicacionRouter };
