var fs = require('fs'),
readline = require('readline');
var convertors = require('./convertors/NumberConvertor');

var filename = __dirname +'/resources/number_convertor.txt'

var rd = readline.createInterface({
    input: fs.createReadStream(filename),
    output: process.stdoutss
});


console.log('=================================================');

rd.on('line', function(line) {
   console.log(`Read:  ${line}`);
   let result =  convertors.convertToWords(line);
   console.log(`Result:  ${result}`);

});



