const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
};



const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems){
    //console.log(`Item: ${item}, \t\tDoes itemToCount contain item?: ${(itemsToCount[item])}`)
    if(itemsToCount[item]){
      if(results[item]){
        results[item] += 1;
      }else {
        results[item] = 1;
      }
    }
  }
  //console.log(`The results are:`, results);
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