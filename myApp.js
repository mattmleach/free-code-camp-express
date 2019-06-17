var dotenv = require('dotenv').config();
var express = require('express');
var app = express();

app.use((req, res, next) => {
    console.log(req.method + req.path + req.ip);
    next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {

    const message = "Hello json";

    res.json({ "message": process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message });
    
});


//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
