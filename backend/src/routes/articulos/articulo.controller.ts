import {Response, RequestHandler} from "express"
import Articulo from "./articulo"

export const createArticulo: RequestHandler = async(req, res) =>{
    const articulo = new Articulo(req.body);
    const savedArticulo = await articulo.save();
    console.log(articulo);
    res.json(savedArticulo);
}

export const getsArticulo: RequestHandler = async(req, res) =>{
    const articulos = await Articulo.find();
    res.json(articulos);
}

export const getArticulo: RequestHandler = async(req, res) =>{
    try {
        const Articulos = await Articulo.find();
        return res.json(Articulos);
      } catch (error) {
        res.json(error);
      }
}

export const deleteArticulo: RequestHandler = async(req, res) =>{
    const articuloFound = await Articulo.findByIdAndDelete(req.params.id);
    if (!articuloFound) return res.status(303).json();
    return res.status(303).json();
}
export const updateArticulo: RequestHandler = async(req, res): Promise<Response> => {
    const articuloUpdated = await Articulo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!articuloUpdated) return res.status(303).json();
    return res.json(articuloUpdated);
  };