//lcm (n,m) =[( m*n )/gcd(m,n) --

function smallestCommons(arr) {
  
//find the min and max of the array -- 
 var max = Math.max(arr[0], arr[1]);
 var min = Math.min(arr[0], arr[1]); 
  
//variable to store the lcm --  
  var lcm;  
  
//for loop to iterate through all numbers in the range given my the max and min -- 
  for (var i=min; i<max; i++) {
//find the lcm of the min and min+1 and then hold it in the lcm variable -- 
    if(i===min){
            lcm = (i * (i+1))/gcd(i, i+1);
      //do the same process as above, but for the min+1 and min+1+1; 
        }else{
            lcm = (lcm * (i+1))/gcd(lcm, i+1);
        }
    }

    return lcm;

 // Implements The Euclidean Algorithm, defined using recursion -- 
    function gcd(x, y) {    
    if (y === 0)
        return x;
    else
      //greatest common denominator should be set at 'i+1', 'remainder of x/y', which
      //the latter should always be one --
        return gcd(y, x%y);
    }
    
  //take x and y as input that you passed, if y is 0 return the x that you pass and done. Else it will take x became y, y became x%y. Example, You passed x = 1, y = 2. y is not 0, so go else, (2, 1%2) = (2,1).
  
  // and the instruction on else keep repeating until y is 0
  
  

}


smallestCommons([1,5]);
