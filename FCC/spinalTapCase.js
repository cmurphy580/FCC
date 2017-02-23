
function spinalCase(str) {
 //split with capture cases to correct camel case, insert $1 and $2 for the
  //two different capture groups, the space between the two numbers, adds a space
  // between the words in the string-- 
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  //the second replace, will remove all spaces and underscores and join the words with 
  // a dash -- 
  return str.replace(/\s+|\_/g, "-");
}

console.log(spinalCase("thisIsSpinalTap"))