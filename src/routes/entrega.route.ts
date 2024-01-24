import express, { Router } from "express";
import * as controller from "../controllers/entrega.controller";
let entregaRouter: Router =  express.Router();

entregaRouter.get('/p/', controller.getEntregasByActivoController);
entregaRouter.get('/responsable/p/', controller.getEntregasByResponsableController);
entregaRouter.get('/ubicacion/p/', controller.getEntregasByUbicacionController);
entregaRouter.get('/cliente/p/', controller.getEntregasByClienteController);
entregaRouter.get('/latest/p/', controller.getLastEntregaByActivoController);
entregaRouter.post('/', controller.newEntregaController);

export { entregaRouter };
