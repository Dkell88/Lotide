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

const middle = function(array) {
  let middleArr = []; //create varibale to store results
  const midIndex = Math.floor(array.length / 2); // determine the middle of the array
  //If the array is even then push in the second middle value
  if (array.length % 2 === 0) {
    middleArr.push(array[midIndex - 1]);
  }
  //Push the middle element of the inputted array
  middleArr.push(array[midIndex]);
 
  return middleArr;
};



assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[5,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle(["this", 'is', 'the', 'middle','of', 'my', 'array']), ['middle']);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]