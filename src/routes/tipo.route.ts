import express, { Router } from "express";
import * as controller from "../controllers/tipo.controller";

let tipoRouter: Router =  express.Router();

tipoRouter.get('/', controller.getTiposController);
tipoRouter.get('/id/p/', controller.getTipoByIdController);

export { tipoRouter };
