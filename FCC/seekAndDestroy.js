
function destroyer (arr) {
	// convert all arguments into one array --
	var args = Array.from(arguments);
	//filter out a particular element from the array, which ones?
	return arr.filter(function(element){
		//and return the elements that are not included in the original array (argument[0]) -- 
		return !args.includes(element);
	});

}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))






//----------------------------------------------------
/*
//converts all arguments in one array --
//slices and calls arguments 0 to 1 -- 
var args = Array.from.slice.call(arguments, 1);
//return the array and filter -- 
return arr.filter(function(element){
	//out the arguments that are not included within the array -- 
  return !args.includes(element);
});

or for the last line -- 
//the elements or arguments that are not found amongst the other arguments --
		//return args.indexOf(element) === -1; 
*/