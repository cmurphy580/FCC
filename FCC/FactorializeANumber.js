function factorialize(num){
//for numbers equal to 0 or 1 --	
	if (num === 0 || num === 1) {
		return 1; 
	}
//for all other numbers greater than 1 -- 
	for (var i=num-1; i>1; i--) {
		num*=1; 
	}
	return num; 
}
	console.log(factorialize(10));
