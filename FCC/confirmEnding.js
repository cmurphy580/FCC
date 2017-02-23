function confirmEnding (str, target) {
	//the character number where the substr method will start --
	var start = str.length - target.length;
	// if the str from the starting point to the end of the str
	// has the same values, 
	//"substr(starting point, endpoint)"
	if (str.substr(start, str.length) === target) {
		//then return true,
		return true;
	} else {
		//else return false--
		return false;
	}



}
console.log(confirmEnding("Open sesame", "same"))