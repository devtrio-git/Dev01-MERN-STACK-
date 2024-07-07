import http from 'http';

const server = http.createServer((req, res) => {
    // Request
    // console.log(req.url);
    // if(req.url != '/favicon.ico'){
    //     console.log(req.url)
    // }
    // console.log(req.method)


    // res.statusCode = 202;
    // res.statusMessage = 'Excellent'
    // res.setHeader('Content-Type', 'text/plain')

    res.writeHead(202, "Good", {'Content-Type': 'text/plain'})
    res.end('Response from Devtrio Server')
})

const PORT = 8000;
const HOST = 'localhost';


server.listen(PORT, HOST, ()=>{
    console.log('Server running at http://localhost:8000/')
})