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


const takeUntil = function(array, callback) {
  let results = []; //Create variable for results
  //Iterate through the array values
  for (const value of array) {
    //If value equals the callback function then stop adding values
    if (callback(value)) {
      return results;
    }
    //push the value into the resuls array until the callback finds the halt value
    results.push(value);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results1,[1,2,5,7,2]);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);


