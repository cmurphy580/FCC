function chunkArrayInGroups (arr, size) {
	//empty array to push the chunked up groups --
	var array = [];
	//while the length is greater than zero perform the below task--
	while (arr.length>0) {
		//push the "spliced" array into the empty array --
		//use "splice" because we are modifying (clipping) the existing array-- 
		array.push(arr.splice(0,size));
	}
	return array; 
}

console.log(chunkArrayInGroups (["a", "b", "c", "d"], 3))

/*
Splice -- can clip or add to an array and CHANGES the array
Slice -- clips a chunk of items from the array but does so as a COPY of the original array (ie doesn't change it).
*/