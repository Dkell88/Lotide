const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};


const findKey = function(object, callback) {
  let result = ""; //Store the results in a string variable
  //Iterate through each key in the object
  for (let key in object) {
    //Determine if the results of the callback function match the past key.
    if (callback(object[key])) {
      result = key; //results = the first key value found that matches the callback function.
      return result;
    }
  }
  return result;
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"