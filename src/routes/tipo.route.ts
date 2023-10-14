import express, { Router } from "express";
import { getTiposController, getTipoByIdController } from "../controllers/tipo.controller";

let tipoRouter: Router =  express.Router();

tipoRouter.get('/', getTiposController);
tipoRouter.get('/p/', getTipoByIdController);

export { tipoRouter };
