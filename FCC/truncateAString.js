function truncateAString(str, num){
	if (num>3) {
		if(str.length>num) {
			//slice modifies an existing string
			//slice (starting pt, end pt) -- 
			str = str.slice(0, num-3);
			//conact will attach any string to the end of an 
			//existing string -- 
			str = str.concat("...");
		} 
		return str; 
	} else {
		str = str.slice(0, num);
		str = str.concat("...");
	}
	return str; 

}
console.log(truncateAString("A-tisket a-tasket A green and yellow basket", 11))