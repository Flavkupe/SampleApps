const http = require('http');
const fs = require('fs');

const server = http.createServer(requestListener);
server.listen(8080);
console.log("Listening on http://localhost:8080");

function requestListener(request, response) {
    console.log("Request: ", request.url);

    if (request.url == "/") {
        const doc = fs.readFileSync('index.html', 'utf-8');
        response.writeHead(200);
        response.end(doc);
    } else if (request.url == "/dostuff.js") {
        const doc = fs.readFileSync('dostuff.js', 'utf-8');
        response.writeHead(200);
        response.end(doc);
    }
}
