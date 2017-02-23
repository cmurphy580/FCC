function truthCheck(collection, pre) {
	  //run through the 'collection' or every array of objects and run a callback function--
  return collection.every(function(object){
    //to return the predicate "pre" located in the objects
    return object[pre];
    //if it is in there, return true...
    //else if the property is not there or has a 'false' value, returns false---
  });
                   
  }

}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))

