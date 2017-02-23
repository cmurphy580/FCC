function rot13 (str) {
	//Split the string into individual characters -- 
	var characters = str.split("");
	//Map through each individual character --
	return characters.map(function(num){
		//Convert each character into a ASCII number (all capitalized) --
		num = num.charCodeAt();
		//65= A, 90=Z -- If number is within this range, per Caesars's Cipher, add 13 --
		if (num>=65 && num<=77) {
			 num += 13; 
		//If number is within this range, subtract 13 --
		} else if(num>=78 && num<=90) {
			 num-=13;
		}
		//Convert each individual ACII number back to the correct letter --  
		return String.fromCharCode(num);
	// Join the string of individual characters together -- 
	}).join(""); 
}
console.log(rot13("SERR PBQR PNZC"))