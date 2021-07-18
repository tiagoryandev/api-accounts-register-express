import dotenv from "dotenv";
import colors from "colors";
import express from "express";
import cors from "cors";
import { router } from "./routes";

dotenv.config();

import "express-async-errors";
import "./database/mongoose";

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(router);
app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            status: "error",
            message: err.message
        });
    };

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

app.listen(port, () => console.log(colors.yellow("[SERVER] - Servidor Iniciado com Sucesso!")));