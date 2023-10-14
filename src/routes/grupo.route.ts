import express, { Router } from "express";
import { getGruposController } from "../controllers/grupo.controller";

let grupoRouter: Router =  express.Router();

grupoRouter.get('/', getGruposController);

export { grupoRouter };
