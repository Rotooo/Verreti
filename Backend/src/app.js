import express from "express";
import morgan from "morgan";
import userr from "./routes/user.js";
import reporrt from "./routes/report.js";
import emprresa from "./routes/empresa.js";
import instrrument from "./routes/instrument.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb+srv://user243:uMpCEIGxXvGm9iuh@verretidemo.i12evdn.mongodb.net/')
    .then((db)=>{console.log('db is connected')})
    .catch((error)=>{console.log(error, 'something went wrong')});

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use("/user",userr);
app.use("/report", reporrt);
app.use("/empresa", emprresa);
app.use("/instrumento", instrrument);

export default app;