import express, { Router } from "express";
import { getResponsablesController, editResponsableController } from "../controllers/responsable.controller";

let responsableRouter: Router =  express.Router();

responsableRouter.get('/', getResponsablesController);
responsableRouter.patch('/', editResponsableController);

export { responsableRouter };
