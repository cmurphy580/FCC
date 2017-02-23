function slasher (arr, howMany) {
	return arr.slice(howMany);
	//return arr.splice(howMany);
}
console.log(slasher([1, 2, 3, 9, 10], 2))

/*
Splice -- can clip or add to an array and CHANGES the array
Slice -- clips a chunk of items from the array but does so as a COPY of the original array (ie doesn't change it).
*/