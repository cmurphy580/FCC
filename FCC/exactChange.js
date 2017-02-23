  var denominations = [{ name: "ONE HUNDRED", value: 100.00 },
      { name: "TWENTY", value: 20.00 },
      { name: "TEN", value: 10.00 },
      { name: "FIVE", value: 5.00 },
      { name: "ONE", value: 1.00 },
      { name: "QUARTER", value: 0.25 },
      { name: "DIME", value: 0.10 },
      { name: "NICKEL", value: 0.05 },
      { name: "PENNY", value: 0.01 }
  ];

  function checkCashRegister(price, cash, cid) {
      var change = cash - price;
      var register = cid.reduce(function(curr, acc) {
          acc.total += curr[1];
          acc[curr[0]] = curr[1];
          return acc;
      }, { total: 0.0 });
      if (register.total === change) {
          return "Closed";
      }
      if (register.total < change) {
          return "Insufficient Funds";
      }
      var changeArray = denominations.reduce(function(acc, curr) {
          var value = 0;
          while (register[curr.name] > 0 && change >= curr.val) {
              value += curr.val;
              change -= curr.val;
              register[curr.name] -= curr.val;
              change = Math.round(change * 100) / 100;
          }
          if (value > 0) {
              acc.push([curr.name, value]);
          }
          return acc;
      }, []);
      if (changeArray.length < 1 || change > 0) {
          return "Insufficient Funds";
      }
      return changeArray;
  }
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.10],
  // ["QUARTER", 4.25],
  // ["ONE", 90.00],
  // ["FIVE", 55.00],
  // ["TEN", 20.00],
  // ["TWENTY", 60.00],
  // ["ONE HUNDRED", 100.00]]

  console.log(checkCashRegister(3.26, 100.00, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.10],
      ["QUARTER", 4.25],
      ["ONE", 90.00],
      ["FIVE", 55.00],
      ["TEN", 20.00],
      ["TWENTY", 60.00],
      ["ONE HUNDRED", 100.00]
  ]))


  /*
  var change = cash - price;
    //{add}
    // Transform CID array into drawer object
    var register = cid.reduce(function(acc, curr){
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc; 
    },{total: 0});
    
    
    // Handle exact change -- 
    if (register.total === change){
      return "Closed";
    }
    //Handle insufficient funds --
    if(register.total < change){
      return "Insufficient Funds";
    }
    
    
    //Loop through the denominations array --
    var changeArray = denom.reduce(function(acc, curr){
      var value = 0; 
      //(sub)
      while(register[curr.name]>0 && change >= curr.val){
        change -= curr.val;
        register[curr.name] -= curr.val; 
        value += curr.val; 
        
        change = Math.round(change*100)/100; 
      }
      
      if (value>0) {
        acc.push([curr.name, value]);
        
      }
      
      return acc;
      
    }, []);
    
    if(changeArray.length < 1 || change > 0) {
      return "Insufficient Funds";
    }
    
    return changeArray; 
  */






  /*
  //basic -- 
    var change = cash - price;
   //define variable as a function that goes through the object of arrays and counts 
    //the cash in drawer, using a reduce function. The next[1] is that index in the string
    //indicating how much of that currency is in that drawer. Set the function, at the end
    // with an initial starting value of 0 -- 
    var totalCid = cid.reduce(function(acc, next){
      return acc + next[1];
    }, 0.0);
    
    //If statement where total cid is less than or equal to the change given -- 
    if (totalCid < change) {
      return "Insufficient Funds";
    } else if (totalCid === change) {
      return "Closed";
    }
   
    //Reverse the object below to match the descending order of the object above -- 
    cid = cid.reverse();
    
    //function to account for +/- of the CID and to calculate total change and total cid --
    var results = denominations.reduce(function(acc, next, index){
      //if the amount of change given is larger than the current denominations, then
      //move to the "next" denomination --
      if (change >= next.value){
         //current value accumulated through the process of the function -- 
        var currentValue = 0.0;
          // maintain function as long as below holds true -- 
        while (change >= next.value && cid[index][1] >= next.value){
        //add to currrent value the ("next") value of the denomination in the var above - 
          currentValue += next.value; 
          //subtract from the change the value added to "currentValue" -- 
          change -= next.value;
          //round up the change to the nearest hundreth -- 
          change = Math.round(change * 100) / 100;
           //subtract from the cid below the value of the denomation added to the current
          //value and subtracted from the change --
          cid[index][1] -= next.value; 
          //round the cid to the nearest hundreth -- 
          cid[index][1] = Math.round(cid[index][1] * 100) / 100; 
        } 
        //push to the empty accumulator the name of the denominations and the value given
        //in change -- 
        acc.push([next.name, currentValue]);
        // return this object -- 
        return acc;
        
      } else {
        
        return acc;
      }
      //add an empty string to push the values and denominations of the change given --
    }, []);
    //extra conditional statement relates to second to last objective
    return results.length > 0 && change === 0 ? results : "Insufficient Funds";
  */
