const express = require('express')
const {users, products} = require('./doc/data')

const app = express()

app.use(express.static('./doc'))

app.get('/', (req, res) => {
    res.status(200).json({msg: "Home Path"})
})

//read all users data
app.get('/api/users', (req, res) => {
    res.status(200).json({length: users.length, users})
})

//read single user data
app.get('/api/users/:id', (req, res) => {
    // id -> route params
    let id = req.params.id
    let single = users.find((item) => item.id == id)
    res.status(200).json({users: single})
})

app.get('/api/products', (req, res) => {
    res.status(200).json({length: products.length, products})
})

app.get('/api/products/:id', (req, res) => {
    // id -> route params
    let id = req.params.id
    let single = products.find((item) => item.id == id)
    res.status(200).json({users: single})
})
app.listen(4600,() => {
    console.log(`server is running @ http://localhost:4600`)
})
