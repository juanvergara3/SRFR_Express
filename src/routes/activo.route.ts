import express, { Router } from "express";
import { getActivosController, getActivosPendientesController, getActivosByGrupoController } from "../controllers/activo.controller";
let activoRouter: Router =  express.Router();

activoRouter.get('/', getActivosController);
activoRouter.get('/p/', getActivosByGrupoController);

activoRouter.get('/pendientes', getActivosPendientesController);

export { activoRouter };
