function largestOfFour (arr) {
	//go through each subarray using the map method --
	return arr.map(function(subArray){
		//Use "Math.max.apply()" to find the largest number in each subArray,
		//apply(non-strict mode use "null" for this value, array-like object to be applied to)--
		return Math.max.apply(null, subArray);
	});
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))