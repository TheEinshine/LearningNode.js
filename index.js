const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'test', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text' });
    //         res.end(content);
    //     })

    // }
    // if (req.url === '/api/users') {
    //     // fs.readFile(path.join(__dirname,'test', 'about.html'), (err,content)=> {
    //     //     if (err) throw err;
    //     //     res.writeHead(200, {'Content-Type' : 'text'});
    //     //     res.end(content);
    //     // })
    //     const users = [
    //         {
    //             name: 'Bob',
    //             age: '25',
    //         },
    //         {
    //             name: 'mike',
    //             age: '28',
    //         }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));

    // }

    //Dynamic File Path
    let filepath = path.join(__dirname, 'test', req.url === '/' ? 'index.html' : req.url);

    // extension of file
    let extName = path.extname(filepath);
    // init content type
    let contentType = 'text/html';

    // check ext and set te content type
    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file 
    fs.readFile(filepath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'test', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // some server error
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);
            }
        } else {
            // Success Response
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});