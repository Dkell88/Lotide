const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};
