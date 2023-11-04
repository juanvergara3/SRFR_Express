import express, { Router } from "express";
import { getPeriodosByActivoController } from "../controllers/periodo.controller";
let periodoRouter: Router =  express.Router();

periodoRouter.get('/p/', getPeriodosByActivoController);

export { periodoRouter };
