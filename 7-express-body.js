const express = require('express');
const PORT = 4600;

const app = express();

// urlencoded body content

app.use(express.urlencoded({ extended: true }));
// to receive json data
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ msg: "home path"});
});

app.post('/api/user/new', (req, res) => {
    //req.body => is used to read the incoming from frontend to server
    let data = req.body
    res.status(200).json({ data })
})
//json data
app.post('/api/login', (req, res) => {
    //req.body => is used to read the incoming from frontend to server
    let data = req.body
    res.status(200).json({ data })
})

app.listen(PORT, () => {
    console.log(`Server is started @ http://localhost:${PORT}`);
});