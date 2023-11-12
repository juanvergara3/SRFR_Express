import express, { Router } from "express";
import { getEstadosController, getEstadoByIdController } from "../controllers/estado.controller";

let estadoRouter: Router =  express.Router();

estadoRouter.get('/', getEstadosController);
estadoRouter.get('/id/p/', getEstadoByIdController);

export { estadoRouter };
