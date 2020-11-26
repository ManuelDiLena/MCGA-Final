import { Console } from "console";
import {Response, RequestHandler} from "express"
import Usuario  from './users'

export const createUser: RequestHandler = async(req, res) =>{
    const usersFound = await Usuario.findOne({Username: req.body.Username});
    if(usersFound)
        return res.status(303).json({massage: "Este usuario ya existe"});
    const users1 = new Usuario(req.body);
    const savedUsers = await users1.save();
    console.log(users1);
    res.json(savedUsers);
}

export const getsUser: RequestHandler = async(req, res) =>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

export const getUser: RequestHandler = async(req, res) =>{
    try {
        const usuarios = await Usuario.find();
        return res.json(usuarios);
      } catch (error) {
        res.json(error);
      }
}

export const deleteUser: RequestHandler = async(req, res) =>{
    const usuarioFound = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioFound) return res.status(303).json();
    return res.status(303).json();
}
export const updateUser: RequestHandler = async(req, res): Promise<Response> => {
    const usuarioUpdated = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!usuarioUpdated) return res.status(303).json();
    return res.json(usuarioUpdated);
  };