const express = require("express");
var app = express();

const port = 3000
const hostname = "127.0.0.1"

app.use(express.static("txtdir"));

app.get("/",function(req,res){
    res.send("LIST");
});

app.get("/upload",function(req,res){
    res.send("UPLOAD");
});

app.get("/delete",function(req,res){
    res.send("DELETE");
});

app.get("/add",function(req,res){
    res.send("ADD");
});


app.listen(port,hostname,function(){
    console.log(`Server Run ${hostname}:${port}`);
});