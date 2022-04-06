const eqArrays = function(arr1, arr2) {

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

const without = function(arr, without) {
  let arrOut = [];
  for (let i = 0; i < arr.length; i++) {

    if (!without.find(element => element === arr[i])) {
      arrOut.push(arr[i]);
    }
  }
  return arrOut;
};

//console.log(without([1, 2, 3], [1]));
assertArraysEqual(without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);