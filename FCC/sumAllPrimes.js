function sumPrimes (num) {
  var array = [];

  for(var i=2; i<=num; i++){
    for(var j=2; j<=i; j++){
      if (i === j) {
        array.push(i);
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return array.reduce(function(a,b){
    return a+b; 
  });
}
console.log(sumPrimes(10))


//The second if statement causes a break on all even numbers when j=2. The value of j will never reach 4 for any even number, as outlined below
/*
If i=2 and j=2, modulus = 0 (break; i++) 
If i=3 and j=2, modulus != 0 (loop, j++)
If i=3 and j=3, modulus = 0 (break; i++)
If i=4 and j=2, modulus = 0 (break; i++)
If i=5 and j=2, modulus != 0 (loop; j++)
If i=5 and j=3, modulus != 0 (loop; j++)
If i=5 and j=4, modulus != 0 (loop; j++)
If i=5 and j=5, modulus = 0 (break; i++)
If i=6 and j=2, modulus = 0 (break; i++)
If i=7 and j=2, modulus != 0 (loop; i++)...
*/
