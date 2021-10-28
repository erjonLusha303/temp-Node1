const http =require('http')

//const server = http.createServer((req, res)=>{
    //res.end('welcome')
//})


//using even emitter API
const server = http.createServer
//emits rquest event
//sbscribe to it/ listen for it / respond to it
server.on('rquest', (req, res)=>{
    res.end('Welcome')
})
server.listen(5000)