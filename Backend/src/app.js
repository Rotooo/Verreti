import express from "express";
import morgan from "morgan";
import router from "./routes/user.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost:27017/Verreti')
    .then((db)=>{console.log('db is connected')})
    .catch((error)=>{console.log(error, 'something went wrong')});

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//uses
app.use("/user",router);

export default app;