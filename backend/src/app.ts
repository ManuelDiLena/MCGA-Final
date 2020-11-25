import express from "express";
import morgan from "morgan";
import cors from "cors";

import articulosRoutes from './routes/articulos/articulo.routes';
import userRoutes from './routes/usuarios/users.routes';


const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(articulosRoutes);
app.use(userRoutes);

export default app;