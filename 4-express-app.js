// api
const express = require('express')

const app = express()

//read
app.get('/', function(req, res) {
    res.status(200).json({msg: "you are in home path"})
})

//post
app.post('/api/register', (req, res) =>{
    res.status(200).json({msg: "register new user"})
})
// patch
app.patch('/api/user/update/:id', (req, res) =>{
    res.status(200).json({msg: "update user info"})
})
//delete -> :id => router parameter  -> sending user id as reference
app.delete('/api/user/delete/:id', (req, res) =>{
    res.status(200).json({msg: "delete user info"})
})
//default
app.all('*', (req, res) => {
    res.status(404).json({msg: "Requested route not found"})
})
app.listen(4300,() => {
    console.log(`server is started @ http://localhost:4300`)
} )
