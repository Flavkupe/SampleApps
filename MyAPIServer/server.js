

const http = require('http');

const database = require('./src/database');

const server = http.createServer(requestListener);
server.listen(3001);
console.log("Listening on http://localhost:3001");

function requestListener(request, response) {

    console.log(request.url);

    if (request.url == "/api/getdata") {
        // load from the db
        const data = database.readData();
        console.log("returning data: ", data);
        response.writeHead(200, { "content-type": "application/json" });
        response.end(data);
    }
    else {
        response.writeHead(200);
        response.end("Nothing was requested");
    }
}
