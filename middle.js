const middle = function(array) {
  let middleArr = []; //create varibale to store results
  if (array.length === 0) {
    return middleArr;
  }

  const midIndex = Math.floor(array.length / 2); // determine the middle of the array
  //If the array is even then push in the second middle value
  if (array.length % 2 === 0) {
    middleArr.push(array[midIndex - 1]);
  }
  //Push the middle element of the inputted array
  middleArr.push(array[midIndex]);
 
  return middleArr;
};
module.exports = middle;