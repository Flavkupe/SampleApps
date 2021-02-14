const fs = require('fs')

function readData() {
    const data = fs.readFileSync('info.txt', 'utf8');
    console.log(data);
    return JSON.stringify({
        theData: data 
    });
}

function writeData(stuffToWrite) {
    fs.writeFileSync('info.txt', stuffToWrite);
    console.log("Wrote stuff to the file");
}

module.exports = {
    readData: readData,
    writeData,
}