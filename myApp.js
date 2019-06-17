
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {

    console.log(process.env);

    const message = process.env.MESSAGE_STYLE === "uppercase" 
        ? "HELLO JSON" 
        : "Hello Json";

    res.json({ "message": message });
    
});


//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
