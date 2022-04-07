const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};


const name = "Darren";
const num = 88;

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Darren", name);
assertEqual(8, num);
assertEqual("88", num);
assertEqual(88, num);
