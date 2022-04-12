const flatten = function(arr) {
  let returnedArr = []; //Create a new array to return

  //Iterate through each element of the passed array.
  for (let element of arr) {
    //If the element is an array loop through again (***Future could be changed to a recursion function ***)
    if (Array.isArray(element)) {
      for (let value of element) {
        //Push each value of the nested array into the returned array
        returnedArr.push(value);
      }
      //Pusch the element of the passed array into the output array
    } else returnedArr.push(element);
  }
  return returnedArr;
};
module.exports = flatten;