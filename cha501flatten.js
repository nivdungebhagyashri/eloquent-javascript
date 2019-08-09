let listOfArrsys=[[3,4,5],[8,8],[4,5,3]];

console.log(listOfArrsys.reduce((flat,current)=>flat.concat(current),[]));
