import { Router } from "express";
import bascReport from "../models/bascRep.js";

const getBascReports = (req, res) => {
    bascReport.find()
    .then((data) => res.json(data))
    .catch((error)=>{console.log(error)})
};

const getBascReport = (req, res) => {
    const { id } = req.params;
    bascReport.findById(id)
    .then((data)=>{res.json(data)}).catch((error)=>{console.log(error)})
};

const createBascReport = (req, res) => {
    const newbascreporte = new bascReport(req.body);
    newbascreporte.save()
    .then(()=>{res.json("reporte creado con éxito")}).catch((error)=>{console.log(error)})
};

const updateBascReport = (req, res) => {
    const { id } = req.params;
    const bascreporte = new bascReport(req.body);
    bascReport.findByIdAndUpdate(id, bascreporte)
    .then(()=>{res.json("actualización exitosa")}).catch((error)=>{console.log(error)})
};

const deleteBascReport = (req, res) => {
    const { id } = req.params;
    bascReport.findByIdAndDelete(id)
    .then(()=>{res.json("borrado exitoso")}).catch((error)=>{console.log(error)})
};

const router = Router();

router.get('/bascreports', getBascReports)
router.get('/bascreports/:id', getBascReport);
router.post('/bascreports', createBascReport);
router.put('/bascreports/:id', updateBascReport);
router.delete('/bascreports/:id', deleteBascReport);

export default router;