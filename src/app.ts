import express, { Application, Request, Response } from 'express';
import cors from 'cors';

export const app:Application = express();

// parser
app.use(cors())
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Server is running...");
})