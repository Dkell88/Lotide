const eqArrays = function(arr1, arr2) {

  //Ensure the two arrays are the same length. If not return false
  if (arr1.length !== arr2.length) return false;

  //Iterate through each element of the array. Return false if any of the elements don't match
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  //If both tests pass return true
  return true;
};


const assertArraysEqual = function(arr1, arr2) {

  //Pass the two arrays into the eqArray function to determine that they are equal. If they are log a pass. If not log a fail.
  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚   Assertion Passed: ${arr1.join()} === ${arr2.join()} 💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${arr1.join()} !== ${arr2.join()}   💥💥💥`);

};


const without = function(arr, without) {
  let arrOut = []; //variable to hold results to output
  //itterate through the inputed array
  for (let i = 0; i < arr.length; i++) {
    //If the without array contains the value of the array the push it into the results.
    if (!without.find(element => element === arr[i])) {
      arrOut.push(arr[i]);
    }
  }
  return arrOut;
};

//console.log(without([1, 2, 3], [1]));
assertArraysEqual(without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
assertArraysEqual(without(["1", "2", "3"], ["3", 2, 1, "4", 6, 4, 3]),["1","2"]);