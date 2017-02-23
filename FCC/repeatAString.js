function repeatStringNumTimes (str, num) {
	if (num>0) {
		return str.repeat(num);
	} else {
		return "";
	}

}
console.log(repeatStringNumTimes("abc", 3))




/* another way using for loop -- 
//empty array to push the num of strs to --
	var array = [];
	//for loop to repeat the number of strings up until num -- 
	for (var i=0; i<num; i++) {
		//push num of strs to empty array -- 
		array.push(str);
	}
	//return and join strs -- 
	return array.join(""); 
	*/