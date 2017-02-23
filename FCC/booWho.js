function booWho(bool){
	/*Uses the operator [typeof] to check if the variable is a boolean. 
	If it is, it will return true. Otherwise, if it is any other type it will return false.*/
	return typeof bool === "boolean";
}
console.log(booWho("a"))

