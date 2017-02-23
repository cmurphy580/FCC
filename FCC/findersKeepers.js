//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
function findElement(arr, func) {

	newArr = arr.filter(func);

	return newArr[0];

	}

console.log(findElement([1, 2, 3, 5, 6, 9], function(num){ return num % 2 === 0; }))