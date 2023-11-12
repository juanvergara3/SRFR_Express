import express, { Router } from "express";
import { getPeriodosByActivoController, getLastPeriodoByActivoController } from "../controllers/periodo.controller";
let periodoRouter: Router =  express.Router();

periodoRouter.get('/p/', getPeriodosByActivoController);
periodoRouter.get('/latest/p/', getLastPeriodoByActivoController);

export { periodoRouter };
