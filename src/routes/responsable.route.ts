import express, { Router } from "express";
import { getResponsablesController, getResponsableByIdController, editResponsableController } from "../controllers/responsable.controller";

let responsableRouter: Router =  express.Router();

responsableRouter.get('/', getResponsablesController);
responsableRouter.get('/id/p/', getResponsableByIdController);
responsableRouter.patch('/', editResponsableController);

export { responsableRouter };
