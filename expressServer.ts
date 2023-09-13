import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

app.all('*', (req: Request,res: Response)=>{
    res.send('<h1>Express with Typescript running on Bun!!!</h1>');
});

app.listen(port, () => {
    console.log(`The server is up and running. Listening on port ${port}`);
});
