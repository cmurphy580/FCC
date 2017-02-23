
function whatIsInAName(collection, source) {
  // What's in a name?
var sourceKeys = Object.keys(source);

return collection.filter(function(obj){
	return sourceKeys.every(function(key){
		return obj.hasOwnProperty(key) && obj[key] === source[key];
	});
});




}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "tree" }))