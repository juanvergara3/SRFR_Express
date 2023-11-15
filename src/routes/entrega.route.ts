import express, { Router } from "express";
import { getEntregasByActivoController } from "../controllers/entrega.controller";
let entregaRouter: Router =  express.Router();

entregaRouter.get('/p/', getEntregasByActivoController);

export { entregaRouter };
