import express, { Router } from "express";
import * as controller from "../controllers/prestador.controller";

let prestadorRouter: Router =  express.Router();

prestadorRouter.get('/', controller.getPrestadoresController);
prestadorRouter.get('/id/p/', controller.getPrestadorByIdController);

export { prestadorRouter };
