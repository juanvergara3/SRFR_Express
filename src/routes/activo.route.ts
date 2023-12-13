import express, { Router } from "express";
import { getActivosController, getActivosPendientesController, getActivosByGrupoController, getActivosByPeriodoController, getActivosByEntregaController } from "../controllers/activo.controller";
let activoRouter: Router =  express.Router();

activoRouter.get('/', getActivosController);
activoRouter.get('/p/', getActivosByGrupoController);
activoRouter.get('/pendientes', getActivosPendientesController);
activoRouter.get('/periodo/p/', getActivosByPeriodoController);
activoRouter.get('/entrega/p/', getActivosByEntregaController);

export { activoRouter };
