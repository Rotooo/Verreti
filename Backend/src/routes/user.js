import { Router } from "express";
import user from "../models/user.js";

const getUsers = (req, res) => {
    user.find()
    then((data) => res.json(data))
    .catch((error)=>{console.log(error)})
};

const getUser = (req, res) => {
    const { id } = req.params;
    user.find({correo: `${id}`})
    .then((data)=>{res.json(data[0])}).catch((error)=>{console.log(error)})
};

const createUser = (req, res) => {
    const newusuario = new user(req.body);
    newusuario.save()
    .then(()=>{res.json("usuario creado con éxito")}).catch((error)=>{console.log(error)})
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const usuario = new user(req.body);
    user.findByIdAndUpdate(id, usuario)
    .then(()=>{res.json("actualización exitosa")}).catch((error)=>{console.log(error)})
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    user.findByIdAndDelete(id)
    .then(()=>{res.json("borrado exitoso")}).catch((error)=>{console.log(error)})
};

const router = Router();

router.get('/users', getUsers)
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;