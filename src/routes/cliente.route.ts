import express, { Router } from "express";
import { getClientesController, getClienteByIdController, getClienteByUbicacionController, editClienteController } from "../controllers/cliente.controller";

let clienteRouter: Router =  express.Router();

clienteRouter.get('/', getClientesController);
clienteRouter.get('/id/p/', getClienteByIdController);
clienteRouter.get('/ubicacion/p/', getClienteByUbicacionController);
clienteRouter.patch('/', editClienteController);

export { clienteRouter };
