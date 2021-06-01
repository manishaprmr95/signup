require('dotenv').config()
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var validator = require('validator');

var cRoutes = require("./routes/coomonRoutes")

const express = require('express');

async function dbConnect(){
    await mongoose.connect('mongodb://localhost:27017/manisha', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    });
}
dbConnect();
const app = express();

app.set("view engine", "ejs")
app.use("/public",express.static("assets"));
app.use(bodyParser.urlencoded({extended:false}))



app.use("/",cRoutes)


app.listen(process.env.PORT ,process.env.HOSTNAME ,()=>{
    console.log("Server Running")
})