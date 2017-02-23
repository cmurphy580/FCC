function permAlone(str) {
    //regex highlights any letter that is repeated/in consecutive order --
    var regex = /(.)\1+/;
    //split the string to change the order the letters--
    var split = str.split("");
    //empty array to push permutations into -- 
    var emptyArray = [];
    //if str has same, consecutive letters, return 0 --
    if (str.match(regex) !== null && str.match(regex)[0] === str) {
        return 0;
    }
    //function to swap the different letters in the string -- 
    //used in conjunction with the generate function below -- 
    function swap(index1, index2) {
        var temp = split[index1];
        split[index1] = split[index2];
        split[index2] = temp;
    }
    //generate different permutations using Heap's algorithm --  
    function generate(n) {
        //if statement breaks the 'generate' recursion -- 
        if (n === 1) {
            return emptyArray.push(split.join(""));
        } else {
            //Heap's algorithm for create the different permutations -- 
            for (var i = 0; i != n; i++) {
                generate(n - 1);
                //swap -- if n i seven return 0, else, use the swap function again, 
                // with parameters i and n-1 -- 
                swap(n % 2 ? 0 : i, n - 1);
            }
        }
    }
    //use the 'generate'/and 'swap' function for the length of the split string -- 
    generate(split.length);
    //filter out all strings, in the emptyArray, with repeated characters, 
    //using filter method -- 
    var filtered = emptyArray.filter(function(value) {
        return !value.match(regex);
    });
    //return the length the filtered array -- 
    return filtered.length;
}

console.log(permAlone('aab'))


//https://en.wikipedia.org/wiki/Heap%27s_algorithm
