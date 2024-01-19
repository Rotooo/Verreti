import { Router } from "express";
import user from "../models/user.js";

const router = Router();

const mainrut = (req, res) => {
    res.send('hello zawarudo')
};

const getUsers = (req, res) => {
    user.find()
    .then((data) => res.json(data))
    .catch((error)=>{console.log(error)})
};

router.get('/', mainrut);
router.get('/users', getUsers)

export default router;