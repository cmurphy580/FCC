
function sumAll(arr) {

var max = Math.max(arr[0],arr[1]);
var min = Math.min(arr[0],arr[1]);

var count = 0; 

for (var i=min; i<=max; i++) {
	count+=i; 
}

return count; 

/*
var range = [];

for (var i=min; i<=max; i++){
	range.push(i);
}
return range.reduce(function(a,b){
	return a+b; 
});
*/

}
console.log(sumAll([1, 4]))