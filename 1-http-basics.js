const http = require('http');

const server = http.createServer(function(req, res) {
    /*
    the function is controller function
    req parameter => used to accept incoming data
    res parameter => used to send output response
    */

    // req.url => read the url path from frontend
    // req.method => read the HTTP method (GET, POST, PUT, DELETE)

    console.log(`method = ${req.method} and url = ${req.url}`)
    return res.end(JSON.stringify({method : req.method, path : req.url}))
})
server.listen(4000, () => {
    console.log(`Server is started, running @ http://localhost:4000`)
})