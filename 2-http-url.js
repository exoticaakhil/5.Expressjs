const express = require('express');

// instance 
const app = express();

// app.request(path , controller)

// // controller module of express js
// get -> read
app.get('/', function(req, res) {
    res.send(`<div>
               <h1>Welcome to express server</h1>
        </div>`)
})

// post -> create
app.post('/user/new', function(req, res) {
    res.send({msg: "post request method"})
})

// put/patch -> update

app.patch('/user/update/123', function(req, res) {
    res.send({msg: "patch request method"})
})

// delete -> delete

app.delete('/user/delete/123', function(req, res) {
    res.send({msg: "delete request method"})
})

// all -> default
app.all(`*`, function(req,res) {
    res.send({ msg: "requested path not found"})
})
// server listen

app.listen(4500, function() {
    console.log(`Server is started,running @ http://localhost:4500`)
})

// app.request(route,controller)
// app.get() -> read
// app.post() -> create
// app.patch() -> update
// app.put()
// app.delete() -> delete
//  app.all() -> delete request
