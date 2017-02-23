function fearNotLetter(str){
	//for loop to iterate through the different letters -- 
	for (var i=0; i<str.length; i++){
		//convert the letters into ACII numbers --
		var conversion = str.charCodeAt(i);
		//if the string of converted numbers not equal to the first character ASCII value plus the number of iterations --
		if(conversion !== str.CharCodeAt(0) + i){
			//then return the str converted back to the previous letter or position in the the iterations that is missing --
			return String.fromCharCode(conversion -1);
		}
	}
	return undefined; 

}
console.log(fearNotLetter("abce"))