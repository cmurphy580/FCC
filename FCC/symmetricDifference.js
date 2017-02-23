function sym(args) {
    //create variable for an array of all arguments -- 
    args = Array.from(arguments);
    //symmetric difference function for two arrays -- 
    function symDiff(arr1, arr2) {
        //empy variables to push unique values -- 
        var unique = [];
        //Use the "forEach" method on the first array and pass a function through it --
        arr1.forEach(function(value) {
            //if statement to find unique values in the second array and unique values in the empty/new variables  -- 
            if (arr2.indexOf(value) < 0 && unique.indexOf(value) < 0) {
                //push unique values to the empty array -- 
                unique.push(value);
            }
        });
        //do the same process, this time for the second array -- 
        arr2.forEach(function(value) {
            if (arr1.indexOf(value) < 0 && unique.indexOf(value) < 0) {
                unique.push(value);
            }
        });
        //return the unique array -- 
        return unique;
    }
    //return the arguments reducing the array to unique values using the "reduce" method,
    //pasing through the helper/symDiff function --              
    return args.reduce(symDiff);
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
