import express, { Router } from "express";
import { getPrestadoresController, getPrestadorByIdController } from "../controllers/prestador.controller";

let prestadorRouter: Router =  express.Router();

prestadorRouter.get('/', getPrestadoresController);
prestadorRouter.get('/id/p/', getPrestadorByIdController);

export { prestadorRouter };
