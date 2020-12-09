const express = require("express");
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const path = require("path");
const app = express();


const public_path = path.join(__dirname,"../public");
app.use(express.static(public_path));


app.set("view engine","hbs");


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/sharing",(req,res)=>{
    res.render("sharing");
});

app.get("/playstore",(req,res)=>{
    res.render("playstore")
});


app.listen(port,()=>{
    console.log(`Your Site Is Live In http://127.0.0.1:${port}`);
});