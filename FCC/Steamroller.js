 function steamRoll (arr) {
 	 //return a reduced array, passing a function with parameters (flat, toFlatten) -- 
 return arr.reduce(function(a,b){
   //return to empty an array the already flatten arguments concatted with,
   //the assessment of the next character.
   //if it is array, use recursion to flatten the argument,
   //if it is not an array, return the result --
   return a.concat(Array.isArray(b) ? steamRoll(b):b);
	},[]);
 }
 console.log(steamRoll([1, [2], [3, [[4]]]]))