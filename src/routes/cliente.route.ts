import express, { Router } from "express";
import * as controller from "../controllers/cliente.controller";

let clienteRouter: Router =  express.Router();

clienteRouter.get('/', controller.getClientesController);
clienteRouter.get('/id/p/', controller.getClienteByIdController);
clienteRouter.get('/ubicacion/p/', controller.getClienteByUbicacionController);
clienteRouter.patch('/', controller.editClienteController);

export { clienteRouter };
