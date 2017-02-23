function addTogether() {
    // create a variable to store the function for checking whether the argument
    // is a number or not -- 
    var checkNum = function(num) {
        // use "TYPEOF" to determine if num is number...
        //...if it is return a number, otherwise return undefined -- 
        return typeof num === 'number' ? num : undefined;
    };
    // if there are more than one arguments -- 
    if (arguments.length > 1) {
        // store the two arguments in seperate variables -- 
        var x = checkNum(arguments[0]);
        var y = checkNum(arguments[1]);
        //if x is undefined and y is undefined, return undefined,
        // else return x + y --
        return (x === undefined || y === undefined) ? undefined : x + y;
        //for conditions 2 and 5 see below, returning a function for an argument less than
        // one or a second, seperate argument--   
    } else {
        //store the first argument --
        var z = checkNum(arguments[0]);
        //if checking whether or not the second argument is a number...
        if (z) {
            // return a function that does so --
            return function(secondArgument) {
                //if z is undefined and result checkNum for the second argument is undefined,
                // return undefined, otherwise return the first argument + the secondArgument's.
                return (z === undefined || checkNum(secondArgument) === undefined) ? undefined : z + secondArgument;

            };

        }

    }


}

console.log(addTogether(2, 3, 5))
