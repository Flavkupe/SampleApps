

const http = require('http');

const database = require('./src/database');

const server = http.createServer(requestListener);
server.listen(8000);
console.log("Listening on http://localhost:8000");

function requestListener(request, response) {

    console.log(request.url);

    if (request.url == "/load") {
        // load from the db
        const data = database.readData();
        response.writeHead(200);
        response.end(data);
    }
    else {
        response.writeHead(200);
        response.end("Nothing was requested");
    }
}
