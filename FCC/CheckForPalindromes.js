function palindrome(str) {
	//matches any character that is not a word -- 
	var regex = /[\W_]/g;
	//lowercases any capital letter in the string
	//replaces any character that is not a word -- 
	var normalize = str.toLowerCase().replace(regex, "");
	//reverses the string --
	var reverse = normalize.split("").reverse().join("");
	//Should return a boolean -- 
	return normalize === reverse; 


}
console.log(palindrome("A man, a plan, a canal. Panama"))