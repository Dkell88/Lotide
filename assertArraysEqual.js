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
