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


const letterPositions = function(string) {
  const results = {}; //Resulting object to be retuned.
  let index = 0; //Create an index for the for..of loop (because why not)
  for (const letter of string) {
    //Ignore spaces
    if (letter !== " ") {
      //Is the letter already included in the object (if)? If yes then push another index location of that letter
      if (results[letter]) {
        results[letter].push(index);
      } else {
      //Else create a key for that letter and include the value as an array with the value of the index location.
        results[letter] = [index];
      }
    }
    index ++;
  }
  return results;
};

letterPositions("hello");
letterPositions("This is a test");

console.log("------These Should Pass-----");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("This is a test").i, [2,5]);

console.log("\n------These Should Fail-----");
assertArraysEqual(letterPositions("hello").o, [1]);
assertArraysEqual(letterPositions("This is a test").s, [4,6]);