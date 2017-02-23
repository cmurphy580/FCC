 

 Array.prototype.last = function () {
  return this[this.length -1];
};

 Array.prototype.secondToLast = function () {
  return this[this.length -2];
};

function fibNum(num) {
  var sequence = [1,1];

  while (sequence.last() + sequence.secondToLast() <= num) {
    sequence.push(sequence.last() + sequence.secondToLast());
  }

  return sequence.filter(function(i){

    return i%2 !== 0; 

  }).reduce(function(a, b){
    
    return a+b;
  });

}
console.log(fibNum(4))


