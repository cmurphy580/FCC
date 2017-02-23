function updateInventory(arr1, arr2) {
    //define a variable that connects to the two arrays and returns a reduce callback        // functionv --
    var updatedQuantity = arr1.concat(arr2).reduce(function(acc, next) {
        //if the item exists,
        if (acc[next[1]]) {
            //then return the item with the new inventory added to the existing total -- 
            acc[next[1]] += next[0];
        } else {
            //if it is a new item add the item and corresponding quantity to the array -- 
            acc[next[1]] = next[0];
        }
        //return the updated arrays in a new object -- 
        return acc;
    }, {});

    // return the updated object and its keys (ie the inventory items, not the number of),
    //and use the map function to transform or alter the called upon array -- 
    return Object.keys(updatedQuantity).map(function(inventory) {
        //Return a 2D array with the first array being the updated inventory quantity,
        //and the second array being the inventory item --
        return [updatedQuantity[inventory], inventory];

        //chain the sort function to return the object in alphabetical order,
        //not lexicographical -- 
    }).sort(function(a, b) {
        //peep the ".sort()" method on ModZilla --
        if (a[1] === b[1]) {
            //0 means they are equal, 1 means a > b, -1 means a < b -- 
            return 0;
        } else {
            return a[1] > b[1] ? 1 : -1;
        }
    });
    //the above can be written like this :"" return (a[1]===b[1]) ? 0 : (a[1]>b[1]) ? 1 : -1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))
