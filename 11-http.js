const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url =='/'){
        res.end('welcome to our home page')
    }
    if(req.url =='/about'){
        res.end('here is our short history')
    }
    res.end(
        `<h1>you gotta go back boi,
         this shit that you requested doesnt exist i our website</h1>
         <p>here cick this link you idiot</p>
         <a href = "/">click this shit</a>
         `

    )
}) 

server.listen(5000)