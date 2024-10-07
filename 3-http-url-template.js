const express = require('express');

const path = require('path');

// instance of express
const app = express();

// static declaration
app.use(express.static("./template"))

// controller
app.get('/', function(req, res)  {
    res.status(200).sendFile(path.resolve(__dirname+ "/template/index.html"))
})
app.get('/about', function(req, res)  {
    res.status(200).sendFile(path.resolve(__dirname+ "/template/about.html"))
})
app.get('/resume', function(req, res)  {
    res.status(200).sendFile(path.resolve(__dirname+ "/template/resume.html"))
})
app.get('/contact', function(req, res)  {
    res.status(200).sendFile(path.resolve(__dirname+ "/template/contact.html"))
})

app.listen(3500, function() {
    console.log(`server is running @ http://localhost:3500`)
})