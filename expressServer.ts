import express, { Express, Request, Response } from "express";
import helmet from "helmet";

const app: Express = express();
const port: number = 3000;

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded( {extended:false} ));

app.get('/', (req: Request, res: Response)=> {
    res.send('<h1>Response to a GET request</h1>');
});

app.post('/', (req: Request, res: Response)=> {
    res.send('<h1>Response to a POST request</h1>');
});

app.listen(port, () => {
    console.log(`The server is up and running. Listening on port ${port}`);
});
