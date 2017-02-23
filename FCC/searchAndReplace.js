
function myReplace(str, before, after) {
  
 if (before[0] === before[0].toUpperCase()){
 	after = after[0].toUpperCase();
 }
 return str.replace(before, after);
}
  


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
