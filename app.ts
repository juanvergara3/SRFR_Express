//base imports
import express, { Express, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import CreateHttpError from "http-errors";
import cors from "cors";

//db
import { initPoolAsync } from "./src/services/db.service";

//routes
import { facturaRouter } from "./src/routes/factura.route";
import { clienteRouter } from "./src/routes/cliente.route";
import { responsableRouter } from "./src/routes/responsable.route";
import { ubicacionRouter } from "./src/routes/ubicacion.route";
import { grupoRouter } from "./src/routes/grupo.route";
import { activoRouter } from "./src/routes/activo.route";
import { marcaRouter } from "./src/routes/marca.route";
import { tipoRouter } from "./src/routes/tipo.route";
import { estadoRouter } from "./src/routes/estado.route";
import { proveedorRouter } from "./src/routes/proveedor.route";
import { prestadorRouter } from "./src/routes/prestador.route";
import { periodoRouter } from "./src/routes/periodo.route";
import { entregaRouter } from "./src/routes/entrega.route";

//app and port
const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

//db initialization ( Not sure if this is necesary but ok )
app.locals.db = initPoolAsync();

//app setup
app.set('port', port);

app.use(helmet());
app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json());
app.use(express.urlencoded( {extended:true} ));

//router setup
app.use('/facturas', facturaRouter);
app.use('/clientes', clienteRouter);
app.use('/responsables', responsableRouter);
app.use('/ubicaciones', ubicacionRouter);
app.use('/grupos', grupoRouter);
app.use('/activos', activoRouter);
app.use('/marcas', marcaRouter);
app.use('/tipos', tipoRouter);
app.use('/estados', estadoRouter);
app.use('/proveedores', proveedorRouter);
app.use('/prestadores', prestadorRouter);
app.use('/periodos', periodoRouter);
app.use('/entregas', entregaRouter);

//404 catcher
app.use(function(req, res, next) {
    next(CreateHttpError(404));
});

//error hadling
app.use((err:any, req: Request, res: Response, next: NextFunction) => {

    // set locals, only providing error in development
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.error(err.message);

    res.locals.message = err.message;

    //can be err.status or err.statusCode
    res.status(err.statusCode || 500).json({'message': err.message});
});

//app initialization
var server = app.listen(port);
server.on('error', onError);
server.on('listening', () => console.log(`App is up and running on port ${port}`));

//honestly, i have no idea of what this does or how it works :/
function onError(error:any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  