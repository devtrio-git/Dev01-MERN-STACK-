import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

// const app = http.createServer((req, res) => {
//     console.log(req.url);
//     if (req.url == '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) {
//                 throw err;
//             }
//             res.writeHead(200, { 'Content-Type': "text/html" });
//             res.end(content)
//         })
//     }
//     if (req.url == '/styles.css') {
//         fs.readFile(path.join(__dirname, 'public', 'styles.css'), (err, content) => {
//             if (err) {
//                 throw err;
//             }

//             res.writeHead(200, { 'Content-Type': "text/css" });
//             res.end(content)
//         })
//     }
// })


const app = http.createServer((req, res) => {

    let filePath = path.join(__dirname, 'public', req.url == '/' ? "index.html" : req.url);
    let contentType = "text/html";
    let fileExt = path.extname(filePath);
    if (!fileExt) {
        filePath += '.html';
    }

    switch (fileExt) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Internal server error')
        }else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content)
        }
    })
})


app.listen(3000, () => {
    console.log('listening server on Port: 3000');
})