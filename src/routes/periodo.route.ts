import express, { Router } from "express";
import * as controller from "../controllers/periodo.controller";

let periodoRouter: Router =  express.Router();

periodoRouter.get('/p/', controller.getPeriodosByActivoController);
periodoRouter.get('/latest/p/', controller.getLastPeriodoByActivoController);
periodoRouter.get('/factura/p/', controller.getPeriodosByFacturaController);

export { periodoRouter };
