const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}  💚💚💚`);
    return;
  }
  console.log(`💥💥💥  Assertion Failed: ${actual} !== ${expected}  💥💥💥`);
};

const eqArrays = function(arr1, arr2) {

  if(arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  
  console.log(`\n---- Entering the thunderdome (eqObject) -----`);
  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2);
  console.log(`Keys 1: ${keys1} \tKeys 2: ${keys2}`)

  if(keys1.length !== keys2.length){
    console.log("Object key lengths are not equal")
    return false;
  }

  for(const tempKey of keys1){
    if(Array.isArray(object1[tempKey])){
      console.log("Yep that there is an Array")
      console.log(`Are these arrays equal?: ${eqArrays(object1[tempKey],object2[tempKey])}`);
      if(!eqArrays(object1[tempKey],object2[tempKey])){
        return false
      }
    }else if(object1[tempKey] !== object2[tempKey]){
      console.log(`For key: ${tempKey} \tObject1 valuve at key = ${object1[tempKey]}\t Object2 valuve at key = ${object2[tempKey]}`)
      console.log(`Key: ${tempKey} did not match in the objects`)
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
const cd2 = {c: "1", d: ["2", 3, 4]} ;
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);