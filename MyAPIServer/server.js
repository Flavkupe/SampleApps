

const http = require('http');

const database = require('./src/database');

const server = http.createServer(requestListener);
server.listen(3001);
console.log("Listening on http://localhost:3001");

function requestListener(request, response) {

    console.log(request.url);
    const url = new URL(request.url, "http://localhost:3001");

    console.log(url);

    if (url.pathname == "/api/getdata") {
        // load from the db
        const data = database.readData();
        console.log("returning data: ", data);
        response.writeHead(200, { "content-type": "application/json" });
        response.end(data);
    }
    else if (url.pathname == "/api/senddata") {
        // save to the db
        console.log("Writing data");

        let incomingData = "";
        request.on('data', function(data) {
            incomingData += data;
        });

        request.on('end', function () {
            if (incomingData) {
                const theActualData = JSON.parse(incomingData);
                console.log("The actual data: ", theActualData);
                database.writeData(theActualData.mydata);
                response.end("Data written: " + incomingData);
                response.writeHead(200);
            } else {
                response.writeHead(400);
                response.end("No payload included.");
            }
        });


    }
    else {
        response.writeHead(404);
        response.end("Unknown url");
    }
}
