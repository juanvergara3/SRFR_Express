import express, { Router } from "express";
import * as controller from "../controllers/grupo.controller";

let grupoRouter: Router =  express.Router();

grupoRouter.get('/', controller.getGruposController);

export { grupoRouter };
