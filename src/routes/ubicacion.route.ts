import express, { Router } from "express";
import { getUbicacionesController, getUbicacionesByClienteController } from "../controllers/ubicacion.controller";
let ubicacionRouter: Router =  express.Router();

ubicacionRouter.get('/', getUbicacionesController);
ubicacionRouter.get('/p/', getUbicacionesByClienteController);

export { ubicacionRouter };
