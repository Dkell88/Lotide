const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};




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


const obj = {
  a: true,
  d: true,
  b: false,
  f: true
};

const arr = ['a',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a'];

const results2 = countOnly(arr,obj);

assertEqual(results2['a'],3);
assertEqual(results2['d'],1);
assertEqual(results2['f'],0);
assertEqual(results2['f'],undefined);

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Joe": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1["Joe"], 1);