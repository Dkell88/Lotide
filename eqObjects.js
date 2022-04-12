const eqArrays   = require('./eqArrays');
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
module.exports = eqObjects;