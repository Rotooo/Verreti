import { Router } from "express";
import report from "../models/report.js";

const getReports = (req, res) => {
    report.find()
    .then((data) => res.json(data))
    .catch((error)=>{console.log(error)})
};

const getReport = (req, res) => {
    const { id } = req.params;
    report.findById(id)
    .then((data)=>{res.json(data)}).catch((error)=>{console.log(error)})
};

const createReport = (req, res) => {
    const newreporte = new report(req.body);
    newreporte.save()
    .then(()=>{res.json("reporte creado con éxito")}).catch((error)=>{console.log(error)})
};

const updateReport = (req, res) => {
    const { id } = req.params;
    const reporte = new report(req.body);
    report.findByIdAndUpdate(id, reporte)
    .then(()=>{res.json("actualización exitosa")}).catch((error)=>{console.log(error)})
};

const deleteReport = (req, res) => {
    const { id } = req.params;
    report.findByIdAndDelete(id)
    .then(()=>{res.json("borrado exitoso")}).catch((error)=>{console.log(error)})
};

const router = Router();

router.get('/reports', getReports)
router.get('/reports/:id', getReport);
router.post('/reports', createReport);
router.put('/reports/:id', updateReport);
router.delete('/reports/:id', deleteReport);

export default router;