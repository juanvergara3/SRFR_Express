import express, { Router, Request, Response, NextFunction } from "express";
import { getEstadosControllerFunction } from "../controllers/test.controller";

let indexRouter: Router =  express.Router();

// indexRouter.get('/', (req, res) => {
//     throw new Error('BROKEN') // Express will catch this on its own.
//   });

//   app.get('/', (req, res, next) => {
//     fs.readFile('/file-does-not-exist', (err, data) => {
//       if (err) {
//         next(err) // Pass errors to Express.
//       } else {
//         res.send(data)
//       }
//     })
//   })

// indexRouter.get('/', (req: Request, res: Response, next: NextFunction)=>{
//     res.json({
//         msg:'Router works!'
//     });
// });

indexRouter.get('/', getEstadosControllerFunction);

export { indexRouter };
