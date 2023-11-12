import express, { Router } from "express";
import { getClientesController, getClienteByIdController, editClienteController } from "../controllers/cliente.controller";

let clienteRouter: Router =  express.Router();

clienteRouter.get('/', getClientesController);
clienteRouter.get('/id/p/', getClienteByIdController);
clienteRouter.patch('/', editClienteController);

export { clienteRouter };
