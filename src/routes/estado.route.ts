import express, { Router } from "express";
import * as controller from "../controllers/estado.controller";

let estadoRouter: Router =  express.Router();

estadoRouter.get('/', controller.getEstadosController);
estadoRouter.get('/id/p/', controller.getEstadoByIdController);

export { estadoRouter };
