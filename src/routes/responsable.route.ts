import express, { Router } from "express";
import * as controller from "../controllers/responsable.controller";

let responsableRouter: Router =  express.Router();

responsableRouter.get('/', controller.getResponsablesController);
responsableRouter.get('/id/p/', controller.getResponsableByIdController);
responsableRouter.patch('/', controller.editResponsableController);
responsableRouter.post('/', controller.newResponsableController);

export { responsableRouter };
