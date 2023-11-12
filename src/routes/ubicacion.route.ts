import express, { Router } from "express";
import { getUbicacionesController, getUbicacionByIdController, getUbicacionesByClienteController, editUbicacionController } from "../controllers/ubicacion.controller";
let ubicacionRouter: Router =  express.Router();

ubicacionRouter.get('/', getUbicacionesController);
ubicacionRouter.get('/id/p/', getUbicacionByIdController);
ubicacionRouter.get('/p/', getUbicacionesByClienteController);
ubicacionRouter.patch('/', editUbicacionController);

export { ubicacionRouter };
