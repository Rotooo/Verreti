import express from "express";
import morgan from "morgan";
import userr from "./routes/user.js";
import reporrt from "./routes/report.js";
import emprresa from "./routes/empresa.js";
import instrrument from "./routes/instrument.js";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

mongoose.connect('mongodb+srv://user243:uMpCEIGxXvGm9iuh@verretidemo.i12evdn.mongodb.net/Verreti')
    .then((db)=>{console.log('db is connected')})
    .catch((error)=>{console.log(error, 'something went wrong')});

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use("/user",userr);
app.use("/report", reporrt);
app.use("/empresa", emprresa);
app.use("/instrumento", instrrument);

//cors
/*const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
};
app.use(cors(corsOptions));*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

export default app;