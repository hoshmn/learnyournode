var file = process.argv[2];

var fs = require('fs');

var contentString = fs.readFileSync(file).toString();

var contentArray = contentString.split('\n');

var numNewLines = contentArray.length-1;

console.log(numNewLines);