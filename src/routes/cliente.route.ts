import express, { Router } from "express";
import { editClienteController, getClientesController } from "../controllers/cliente.controller";

let clienteRouter: Router =  express.Router();

clienteRouter.get('/', getClientesController);
clienteRouter.patch('/', editClienteController);

export { clienteRouter };
