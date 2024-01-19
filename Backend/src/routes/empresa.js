import { Router } from "express";
import empresa from "../models/empresa.js";

const getEmpresas = (req, res) => {
    empresa.find()
    .then((data) => res.json(data))
    .catch((error)=>{console.log(error)})
};

const getEmpresa = (req, res) => {
    const { id } = req.params;
    empresa.findById(id)
    .then((data)=>{res.json(data[0])}).catch((error)=>{console.log(error)})
};

const createEmpresa = (req, res) => {
    const newEmpresa = new empresa(req.body);
    newEmpresa.save()
    .then(()=>{res.json("empresa creada con éxito")}).catch((error)=>{console.log(error)})
};

const updateEmpresa = (req, res) => {
    const { id } = req.params;
    const empres = new empresa(req.body);
    empresa.findByIdAndUpdate(id, empres)
    .then(()=>{res.json("actualización exitosa")}).catch((error)=>{console.log(error)})
};

const deleteEmpresa = (req, res) => {
    const { id } = req.params;
    empresa.findByIdAndDelete(id)
    .then(()=>{res.json("borrado exitoso")}).catch((error)=>{console.log(error)})
};

const router = Router();

router.get('/empresas', getEmpresas)
router.get('/empresas/:id', getEmpresa);
router.post('/empresas', createEmpresa);
router.put('/empresas/:id', updateEmpresa);
router.delete('/empresas/:id', deleteEmpresa);

export default router;