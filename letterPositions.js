const eqArrays = function(arr1, arr2) {

  if(arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚  Assertion Passed: ${arr1.join()} === ${arr2.join()}  💚💚💚 `);
    return;
  } 
  console.log(`💥💥💥  Assertion Failed: ${arr1.join()} !== ${arr2.join()}   💥💥💥`);

};

const letterPositions = function(string) {
  const results = {};
  let index = 0;
  for(const letter of string){
    //console.log(letter);
    if(letter !== " "){
      if(results[letter]){
        //console.log(`Push  [${index}] into key`);
        results[letter].push(index);
      }else {
        //console.log(`Initially add the key = [${index}]`);
        results[letter] = [index];
      }
    }
    index ++;
  }
  //console.log(results);
  return results;
};

letterPositions("hello");
letterPositions("This is a test");

console.log("------These Should Pass-----")
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("This is a test").i, [2,5]);

console.log("\n------These Should Fail-----")
assertArraysEqual(letterPositions("hello").o, [1]);
assertArraysEqual(letterPositions("This is a test").s, [4,6]);
