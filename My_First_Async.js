var file = process.argv[2];

var fs = require('fs');

fs.readFile(file, 'utf8', function(err, data){
	if (!err){

		var contentArray = data.split('\n');

		var numNewLines = contentArray.length-1;

		console.log(numNewLines);
	}
});

