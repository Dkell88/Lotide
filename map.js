const eqArrays = function(arr1, arr2) {

  if(arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚   Assertion Passed: ${arr1.join()} === ${arr2.join()}   💚💚💚`);
    return;
  } 
  console.log(`💥💥💥  Assertion Failed: ${arr1.join()} !== ${arr2.join()}  💥💥💥`);

};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word+'ay');
const results3 = map(words, word => word+'ay');

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2,["grounday", "controlay", "toay", "majoray", "tomay"]);