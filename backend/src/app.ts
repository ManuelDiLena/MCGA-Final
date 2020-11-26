import express from "express";
import morgan from "morgan";
import cors from "cors";

import articulosRoutes from './routes/articulos/articulo.routes';
import userRoutes from './routes/usuarios/users.routes';


const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev")); // esto hace que cuando haga una peticion de cambio de pantalla, se muestren los esas peticiones en consola
app.use(cors()); //esto hace que pueda utilizar cualquier servidor
app.use(express.json()); // es para que entienda cuando usamos los objetos Json
app.use(express.urlencoded({ extended: false })); //


app.use(articulosRoutes);
app.use(userRoutes);

export default app;