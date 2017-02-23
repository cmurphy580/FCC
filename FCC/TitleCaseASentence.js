function titleCase(str){
	//lowercase the string. split the string into an array of words,
	//use the map method to go through all individual words -- 
	str = str.toLowerCase().split(" ").map(function(word) {
		//use the function within map to replace the first character
		//of each word with the capital letter "replace(target, replacement)"--
		return word.replace(word[0], word[0].toUpperCase());
	});
	//then join the transformed string -- 
	return str.join(" ");
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))