const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};

// Instruction
// Implement the function findKey which takes in an object and a callback. 
// It should scan the object and return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  let result = "";
  for(let key in object){
    //console.log(object[key]);
    //console.log(callback(key))
    if(callback(object[key])){
      result = key;
      return result
    }
  }
  return result
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"