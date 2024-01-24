import express, { Router } from "express";
import * as controller from "../controllers/activo.controller";
let activoRouter: Router =  express.Router();

activoRouter.get('/', controller.getActivosController);
activoRouter.get('/p/', controller.getActivosByGrupoController);
activoRouter.get('/pendientes', controller.getActivosPendientesController);
activoRouter.get('/periodo/p/', controller.getActivosByPeriodoController);
activoRouter.get('/entrega/p/', controller.getActivosByEntregaController);

export { activoRouter };
