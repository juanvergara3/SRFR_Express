import express, { Router } from "express";
import { getResponsablesController } from "../controllers/responsable.controller";

let responsableRouter: Router =  express.Router();

responsableRouter.get('/', getResponsablesController);

export { responsableRouter };
