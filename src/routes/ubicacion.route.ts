import express, { Router } from "express";
import { getUbicacionesController } from "../controllers/ubicacion.controller";
let ubicacionRouter: Router =  express.Router();

ubicacionRouter.get('/', getUbicacionesController);

export { ubicacionRouter };
