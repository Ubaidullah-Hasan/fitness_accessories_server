import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { router } from './App/routes';

export const app:Application = express();

// parser
const corsOptions = {
    origin: "https://fitness-accessories-client.vercel.app",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", router);


app.get("/", (req: Request, res: Response) => {
    res.send("Server is running...");
})