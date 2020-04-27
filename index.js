var fs = require('fs'),
readline = require('readline');
var convertors = require('./src/convertors/NumberConvertor');

var filename = __dirname +'/resources/number_convertor.txt'

readFromFile(filename);


function readFromFile(filename){
    console.log('===================== Reading from file example ============================');
    let rd = readline.createInterface({
        input: fs.createReadStream(filename),
        output: process.stdoutss
    });
    
    rd.on('line', function(line) {
       console.log(`Read:  ${line}`);
       let result =  convertors.convertToWords(line);
       console.log(`Result:  ${result}`);
    
    });
}

function convertNumberToWords(stringParam) {
    return convertors.convertToWords(stringParam)
    
}

module.exports = {
    convertNumberToWords
}


