//Symmetric Difference Challenge -- 

function diffArray(arr1, arr2) {
  
  var newArr = arr1.concat(arr2);
            //use filter with three arguments:
            //1)value = the particular string, number, or value being compared to the others 
            //in the array.
            //2)index = the location of that value in the string.
            //3)array = the entire array--
  return newArr.filter(function(value, index, array){
            //if the anything to the right of that pt in the array 
            // And if anything to the left of that pt in the array can NOT be found, 
            //then return that value --
    if(array.slice(index+1).indexOf(value) === -1 && array.slice(0,index).indexOf(value) === -1) {
     
      return value; 
    }
  });
  
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))


//A easier way to do it -- 
/*
  var newArr = [];
  //looping through the first array to find elements that are not in the second -- 
  for (var i=0; i<arr1.length; i++) {
    // indexOf is key to the above goal -- 
    if (arr2.indexOf(arr1[i]) === -1) {
      //push unique elements into newArr -- 
      newArr.push(arr1[i]);
    }
  }
  //Do the same process above but for the second array, because the difference may be in the second array -- 
  for (var j=0; j<arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  
  // Same, same; but different.
  return newArr;
*/
