let dotenv = require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }).extended = false);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {

    const message = "Hello json";

    res.json({ 
        "message": process.env.MESSAGE_STYLE === "uppercase" 
            ? message.toUpperCase() 
            : message 
    });
    
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res, next) =>{
    res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
  res.json({
      "echo": req.params.word
  });
});

app.get('/name', (req, res) => {
    res.json({
        "name": req.query.first + ' ' + req.query.last
    });
});

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
