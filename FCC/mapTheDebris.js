//use the Orbital Period formula for "Two bodies orbiting each other" --

function orbitalPeriod(arr) {

    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    //Using the reduce method -- reduces existing array and return results into new array -- 

    /*Formula for Orbital Period -- 
    t = 2pi*((r+avgAlt)^3/GM)^(1/2))
    */

    return arr.reduce(function(acc, obj) {

        var orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)));

        acc.push({ name: obj.name, orbitalPeriod: orbitalPeriod });

        return acc;

    }, []);


    //Using the forEach method -- transforms existing array{s} -- 

    /*
      arr.forEach(function(obj){
       var orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius+obj.avgAlt, 3)/GM)));
       obj.orbitalPeriod = orbitalPeriod; 
       delete obj.avgAlt; 
     });
     
     return arr;
     */







}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
