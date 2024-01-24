import express, { Router } from "express";
import * as controller from "../controllers/marca.controller";

let marcaRouter: Router =  express.Router();

marcaRouter.get('/', controller.getMarcasController);
marcaRouter.get('/id/p/', controller.getMarcaByIdController);

export { marcaRouter };
