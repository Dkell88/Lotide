const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};


const findKeyByValue = function(objIn, valueIn) {

  //If the object (objIn) doesn't include the value being looked for than return undefined.
  if (!Object.values(objIn).includes(valueIn)) {
    return;
  }

  //Iterate through each of the keys in the object
  for (const tempValue in objIn) {
    //If the value of the key being searched equals the valueIn being search for. Than return the key name.
    if (objIn[tempValue] === valueIn) {
      return tempValue;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), " ");//undefined);
