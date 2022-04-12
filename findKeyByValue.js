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
module.exports = findKeyByValue;