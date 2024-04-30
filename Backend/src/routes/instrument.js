import { Router } from "express";
import instrument from "../models/instrument.js";

const getInstruments = (req, res) => {
    instrument.find()
    .then((data) => res.json(data))
    .catch((error)=>{console.log(error)})
};

const getInstrument = (req, res) => {
    const { id } = req.params;
    instrument.findById(id)
    .then((data)=>{res.json(data)}).catch((error)=>{console.log(error)})
};

const createInstrument = (req, res) => {
    const newinstrumento = new instrument(req.body);
    newinstrumento.save()
    .then(()=>{res.json("instrumente creado con éxito")}).catch((error)=>{console.log(error)})
};

const updateInstrument = (req, res) => {
    const { id } = req.params;
    const instrumento = new instrument(req.body);
    instrument.findByIdAndUpdate(id, instrumento)
    .then(()=>{res.json("actualización exitosa")}).catch((error)=>{console.log(error)})
};

const deleteInstrument = (req, res) => {
    const { id } = req.params;
    instrument.findByIdAndDelete(id)
    .then(()=>{res.json("borrado exitoso")}).catch((error)=>{console.log(error)})
};

const router = Router();

router.get('/instruments', getInstruments)
router.get('/instruments/:id', getInstrument);
router.post('/instruments', createInstrument);
router.put('/instruments/:id', updateInstrument);
router.delete('/instruments/:id', deleteInstrument);

export default router;