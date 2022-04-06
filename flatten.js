const eqArrays = function(arr1, arr2) {

  if(arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  
  if (eqArrays(arr1, arr2) === true) {
    console.log(`Assertion Passed: ${arr1.join()} === ${arr2.join()}`);
  } else console.log(`Assertion Failed: ${arr1.join()} !== ${arr2.join()}`);

};

const flatten = function(arr){
  outArr = [];
  for(let element of arr){
    if(Array.isArray(element)) {
      for(let value of element){
        outArr.push(value);
      }
    }else outArr.push(element);
  }
  return outArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6, 7]);