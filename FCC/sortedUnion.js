//another symmetric difference function, but this time with "n" arrays -- 
function uniteUnique(arr) {
	//place all arguments into one array --
	var args = Array.from(arguments);
	//reduce the argument passing an ano anonymous function with two parameters, a - array one and b - array two or how many -- 
	return args.reduce(function(a,b){
		//concat the arrays and use the filter method with the concat method, as the concat method will create a new array --
		return a.concat(b.filter(function(items){
			//return all values that are not found, or equal to -1 -- 
			return a.indexOf(items) < 0; 
			
		}));
	});
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
