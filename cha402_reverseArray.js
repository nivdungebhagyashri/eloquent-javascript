function reverseArray(givenArray){
    let newArray=[];
    for (let i=givenArray.length-1;i>=0;i--){
      newArray.push(givenArray[i]);
      
    }
    return newArray
  }
  
  console.log(reverseArray([5,6,9,4]));
  
  
  function reverseArrayInPlace(givenArray){
    let length=givenArray.length;
    for (let i=0;i<Math.floor(length/2);i++){
      let old=givenArray[i];
       givenArray[i]=givenArray[length-1-i];
          givenArray[length-1-i]=old;
     }
    return givenArray;
  }
  
  console.log(reverseArrayInPlace([5,6,9,4]));