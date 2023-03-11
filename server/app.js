const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');



app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended: true}))
const home=require("./routes/userroutes");
app.use("/api/v1", home)



module.exports= app;
