import express, { Router } from "express";
import { getMarcasController, getMarcaByIdController } from "../controllers/marca.controller";

let marcaRouter: Router =  express.Router();

marcaRouter.get('/', getMarcasController);
marcaRouter.get('/id/p/', getMarcaByIdController);

export { marcaRouter };
