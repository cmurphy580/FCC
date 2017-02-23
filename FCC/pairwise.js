function pairwise(arr, arg) {
  
     var local = arr.slice();
     return local.reduce(function(acc, num, index, array){
       for (var i=index+1; i<arr.length; i++){
         if(array[index]+array[i]===arg){
           acc += index + i;
           array[index] = array[i] = NaN; 
         }
       }
       return acc; 
     },0);
     
     


    /*THE FIRST WAY WITH COMMENTS -- 
     
     //create a local version of the argument, as to not modify the original --
     var local = arr.slice();
     //Using ".reduce" method, use acc and num in addition to index and array
     //index gives you the number you are currently on --
     //array is the whole number string -- 
     return arr.reduce(function(acc, num, index, array){
     //for loop to iterate through the number array --
       //i = index+1, because you want to add two numbers, the index and the next one over--
       for (var i = index + 1 ; i < array.length; i++){
       //if statement --
         if(array[index] + array[i] === arg){
         //add to the accumulator the index and i(index+1) if the conditional is satisfied--
           acc += index + i;
          //ensures indexes numbers are not reused/ no duplicates are added together -
          //basically saying,in any case where the two indexes are equal, then 
           //the result is NaN and should not be added to the accumulator/together -- 
           array[index] = array[i] = NaN;
        }
      }
       return acc; 
     //add zero to end of function as a starting point for the accumulator --   
     },0);
     
     */
    //ANOTHER WAY --
    /*
    var local = arr.slice();
    var total = 0;
     for (var i=0; i<local.length; i++) {
       for (var j=i+1; j<local.length; j++){
         if(local[i]+local[j]===arg){
           total += i+j; 
           local[i]=local[j]=NaN;
         }
       }
     }
     return total;
    */








}


console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
