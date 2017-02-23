
function dropElements(arr, func) {
	  // Drop them elements.
  
  //while there is a length greater than 0, and the function returns false on the
  // the particular element in the array...
  while(arr.length > 0 && !func(arr[0])){
    //...keep shifting left through the array until a true result is reached -- 
    arr.shift();
  }
  
 return arr; 
 
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))