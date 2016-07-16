var args = process.argv;

args=args.slice(2);

var sum = args.reduce(function(total, next){
	return total += +next;
},0);

console.log(sum);
