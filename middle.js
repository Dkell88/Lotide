

const middle = function(array) {
  let middleArr = [];
  const midIndex = Math.floor(array.length / 2);
  //console.log(`middleArr: ${middleArr} \t midIndex: ${midIndex} \t Odd?: ${(array.length % 2 === 0)}`)
  middleArr.push(array[midIndex]);
  if (array.length % 2 === 0) {
    middleArr.push(array[midIndex - 1]);
  }
  return middleArr;
};
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1.join()} === ${arr2.join()}`);
  } else console.log(`Assertion Failed: ${arr1.join()} !== ${arr2.join()}`);

};

assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[5,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle(["this", 'is', 'the', 'middle','of', 'my', 'array']), ['middle']);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]