
function pairElement(str) {
//Create an Object and Use Map -- 

  //create an object matching the key with dna pair/value -- 
  var pair = {A: "T", T: "A", C: "G", G: "C"};
  //split the string and map through each letter --
  return str.split("").map(function(item){
    //return the each of the letters (="item") with its corresponding DNA value using bracket notation, and return it in
    // a new array -- 
    return [item, pair[item]];
  });
}

console.log(pairElement("GCG"))

/* ES6  -- using map - 
function pairElement(str) {
  return str.split('').map(a=>[a,a=='G'?'C':a=='C'?'G':a=='A'?'T':'A']);
}﻿
*/


/*Switch Statement -- 
  //split the string -- 
  str = str.split("");
  //empty array
  var emptyArray = [];
  // iterates through string
  for (var i=0; i<str.length; i++){
   //if equal to "G"...
  switch (str[i]) {
    case "A":
      emptyArray.push(["A","T"]);
      break;
    case "T":
      emptyArray.push(["T","A"]);
      break;
    case "C":
      emptyArray.push(["C","G"]);
      break;
    case "G":
      emptyArray.push(["G","C"]);
      break;
  }
    
  }
  
  return emptyArray;
  */

  /* If else statements -- 

  //split the string -- 
  str = str.split("");
  //empty array
  var emptyArray = [];
  // iterates through string
  for (var i=0; i<str.length; i++){
   //if equal to "G"...
   if (str[i]=="G") {
     //pushes letter and corresponding value to the empty array -- 
      emptyArray.push(["G","C"]);
   }else if (str[i]=="C"){
      emptyArray.push(["C","G"]);
   }else if (str[i]=="A"){
      emptyArray.push(["A","T"]);
   }else if (str[i]=="T"){
      emptyArray.push(["T","A"]);
   }
    
  }
  
  return emptyArray;

  */
