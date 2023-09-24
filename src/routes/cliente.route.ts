import express, { Router } from "express";
import { getClientesController } from "../controllers/cliente.controller";

let clienteRouter: Router =  express.Router();

clienteRouter.get('/', getClientesController);

export { clienteRouter };
