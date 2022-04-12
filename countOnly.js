const countOnly = function(allItemArr, itemsToCountObj) {
  const results = {}; //Variable to store the results of the findings. Key = The item to count from allItemArr, value = the number of instances of that key found

  //Iterate through each "item" in the allItemArr array.
  for (const item of allItemArr) {
    //Determine if the item in the allItemArr exists in the itemsToCountObj
    if (itemsToCountObj[item]) {
      //If found, check to see if that item already exists (if) in the results object created or not (else).
      //If the object already exists then increment the instance of that item by 1. Else add it to teh object and start the count (value) at one.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;
