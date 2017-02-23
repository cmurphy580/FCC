function findTheLongestWord(str){
	//break down the str into an array of strings -- 
	var one = str.split(" ");
	//create an empty string to compare to the variable, "one" --
	var second = "";
//for loop compares the length of the current word to the empty word,
//if the current word is greater then the second then it replaces the word in second -- 
	for (var i=0; i<one.length; i++){
		if (second.length < one[i].length){
			second = one[i];
		}
	}
return second.length; 

}
console.log(findTheLongestWord("May the force be with you"))