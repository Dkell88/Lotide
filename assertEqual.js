const name = "Darren";
const num = 88;

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else console.log("Assertion Failed: " + actual + " !== " + expected);
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Darren", name);
assertEqual(8, num);
assertEqual("88", num);
assertEqual(88, num);
