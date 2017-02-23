
function convertToRoman(num) {
	//Set up an object where the roman numerals are the keys and the corresponding values as the values -- 
  var romans = {
    	M: 1000,
    	CM: 900,
    	D: 500, 
    	CD: 400, 
    	C: 100, 
    	XC: 90,
    	L: 50, 
    	XL: 40, 
    	X: 10,
    	IX: 9,
    	V: 5, 
    	IV: 4,
    	I: 1 
  	};
    //set up and empty string -- 
  	var results = "";
    //a for loop to iterate through the keys of the object -- 
  	for(var keys in romans){
      //if the number is greater than or equal to the object value then us that key, and go through the process below--
  		if(num>=romans[keys]) {
  			//add the roman numerals to the string,
        results += keys.repeat((Math.trunc(num/romans[keys])));
  			//while subtracting from the num, until num equals zero an is no longer greater than any of the object values -- 
        num -= romans[keys] * Math.trunc(num/romans[keys]);
  		}
  	}
  	return results; 
}
console.log(convertToRoman(12))  