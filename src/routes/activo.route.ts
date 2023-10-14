import express, { Router } from "express";
import { getActivosController, getActivosByGrupoController } from "../controllers/activo.controller";
let activoRouter: Router =  express.Router();

activoRouter.get('/', getActivosController);
activoRouter.get('/p/', getActivosByGrupoController);

export { activoRouter };
