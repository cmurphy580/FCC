var Person = function(firstAndLast) {
    //defining Public variables and passing through one string -- [0]-firstName &
    //[1] - lastName --
    this.first = firstAndLast.split(" ")[0];
    this.last = firstAndLast.split(" ")[1];

    //Using closure to define the variables/ keys below -- 
    //"get" method -- 
    this.getFirstName = function() {
        return this.first;
    };
    this.getLastName = function() {
        return this.last;
    };
    this.getFullName = function() {
        return this.first + " " + this.last;
    };

    //"set" method -- 
    //takes one argument and set it equal to "this.first/last"
    this.setFirstName = function(firstStr) {
        this.first = firstStr;
    };
    this.setLastName = function(lastStr) {
        this.last = lastStr;
    };
    //Set FullName by spliting the argument and using the first element for the first 
    //name and likewise for the last name -- 
    this.setFullName = function(firstAndLastStr) {
        this.first = firstAndLastStr.split(" ")[0];
        this.last = firstAndLastStr.split(" ")[1];
    };

};

var bob = new Person('Bob Ross');

bob.getFullName();

//The "defineProperty" method on Object allows you access certain conditions on that 
//particular variable (in this case, first and last) and edit its properties.
//The Enumerable condition is set to 'false' so that we can iterate through
//that particular property in a a 'for loop' and can not access it using 'object.keys'.
//Allowing us to complete the first objective and shortening the object length to 6 keys.
Object.defineProperty(bob, "first", {
    enumerable: false
});
Object.defineProperty(bob, "last", {
    enumerable: false
});
