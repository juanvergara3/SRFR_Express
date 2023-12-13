import express, { Router } from "express";
import { getPeriodosByActivoController, getLastPeriodoByActivoController, getPeriodosByFacturaController } from "../controllers/periodo.controller";
let periodoRouter: Router =  express.Router();

periodoRouter.get('/p/', getPeriodosByActivoController);
periodoRouter.get('/latest/p/', getLastPeriodoByActivoController);
periodoRouter.get('/factura/p/', getPeriodosByFacturaController);

export { periodoRouter };
