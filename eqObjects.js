const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};

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

const eqObjects = function(object1, object2) {
  
  //Store the key values from each object just to clean up some of the loops.
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //Check to see if each object has the same number of keys. If not then return false.
  if (keys1.length !== keys2.length) {
    return false;
  }

  //Iterate through the keys of the first object.
  for (const tempKey of keys1) {
    //First check to see if the key contains an array (as a  value)
    if (Array.isArray(object1[tempKey])) {
      //Use the eqArray to determine if the arrays at tempKey are equal. If not return false.
      if (!eqArrays(object1[tempKey], object2[tempKey])) {
        return false;
      }
      //If not an Array then check to ensure the values of the two keys match. If not return false.
    } else if (object1[tempKey] !== object2[tempKey]) {
      return false;
    }
  }
  return true;
};

/*const ab = { a: "1", b: "2", c: "3" };
const ba = { b: "2", a: "1" , c: "3"};
const abcd = { b: "2", a: "1" , c: "3", d: "4"};
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abcd), false); */

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);