var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];
var extTest = new RegExp('.'+ext+'$');

fs.readdir(dir, function(err, list){
	if (!err){

		list.forEach(function(file){
			if (extTest.test(file)){
				console.log(file);
			}
		});
	}
});