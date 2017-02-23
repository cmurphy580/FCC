function translatePigLatin(str) {
	//define a regex for vowels --
	var regex = /[aeiou]/;
	//make this variable global, but will be later defined -- 
	var firstVowel;
	//if the first letter of the word is a vowel,
	if (str[0].match(regex)) {
		//then return the word with "way" attached to it -- 
		str = str + "way";
	} else {
		//defining the variable above as the first vowel in the word, matched with our regex -- 
		//finding the position in the word where the first vowel is -- 
		firstVowel = str.indexOf(str.match(regex));
		//Once the vowel is identified we substract the consonants leading up to it and add it/them to the end of the word + "ay" -- 
		str = str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
	}
	return str; 

}
console.log(translatePigLatin("cxytalifornia"))