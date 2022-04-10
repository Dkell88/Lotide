const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};


const tail = function(array) {
  return array.slice(1); //Return the all but the first element in the array.
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [1,2,3,4,5,6];
const values = ["june", 6, "fish", 88];
const blank = [];
assertEqual(words.length, 3);
assertEqual(tail(words).join(), "Lighthouse,Labs");
assertEqual(tail(numbers).join(), "2,3,4,5,6");
assertEqual(tail(values).join(), "6,fish,88");
assertEqual(tail(blank).join(), "");
assertEqual(tail(blank).join(), "");