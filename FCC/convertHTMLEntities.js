function convertHTML(str) {
 // 1)Using the replace method and regex -- 
str = str.replace(/&/g,'&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return str; 


//2) Creating an object --
	/*
	var htmlEntities = {
    	'&':'&amp;',
    	'<':'&lt;',
    	'>':'&gt;',
    	'\"':'&quot;',
    	'\'':"&apos;"
  	};

  	return str.spit('').map(function(item){
  		return htmlEntities[item] || item;
  	}).join('');
  	*/


}
console.log(convertHTML("Dolce & Gabbana"))