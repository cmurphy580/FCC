function mutation(arr) {
	//Lower case both strings for comparison purposes -- 
	var wordOne = arr[0].toLowerCase();
	var wordTwo = arr[1].toLowerCase();
	//iterate through each letter of word two --
	for (var i=0; i<wordTwo.length; i++) {
		//compare each letter of word two to word one, 
		//and set that value equal to a variable -- 
		var value = wordOne.indexOf(wordTwo[i]);
		//if any of word two's letters can not be found in word one,
		if (value === -1) {
			//then return false --
			return false; 
		}
	}
	//else return true -- 
	return true; 

}
console.log(mutation(["hello", "hey"]))