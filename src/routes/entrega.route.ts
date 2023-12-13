import express, { Router } from "express";
import { getEntregasByActivoController, getEntregasByResponsableController, getEntregasByUbicacionController, getEntregasByClienteController } from "../controllers/entrega.controller";
let entregaRouter: Router =  express.Router();

entregaRouter.get('/p/', getEntregasByActivoController);
entregaRouter.get('/responsable/p/', getEntregasByResponsableController);
entregaRouter.get('/ubicacion/p/', getEntregasByUbicacionController);
entregaRouter.get('/cliente/p/', getEntregasByClienteController);

export { entregaRouter };
