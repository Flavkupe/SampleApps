const fs = require('fs')

function readData() {
    const data = fs.readFileSync('info.txt', 'utf8');
    console.log(data);
    return JSON.stringify({
        theData: data 
    });
}

function writeData() {

}

module.exports = {
    readData: readData,
    writeData,
}