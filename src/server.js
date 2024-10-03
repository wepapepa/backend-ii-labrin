import "dotenv/config";
import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import "./passport/jwt.js"; //inicializa la estrategia
import { errorHandler } from "./middlewares/errorHandler.js";
import { initMongoDB } from "./db/connection.js";  
import MainRouter from "./routes/index.js";


const mainRouter = new MainRouter();

const app = express();

app
    .use(json())
    .use(urlencoded({ extended: true }))
    .use(morgan("dev"))
    .use(cookieParser())//da acceso a las cookies
    .use("api", mainRouter.getRouter())
    .use(errorHandler);

initMongoDB()
    .then(() => console.log("base de datos conectada correctamente"))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log( `servidor corriendo en el PORT: ${PORT}`));
    