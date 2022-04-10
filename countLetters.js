const assertEqual = function(actual, expected) {

  //Determine if two primatives are equal. If they are log a pass. If not log a fail.
  if (actual === expected) {
    console.log(`💚💚💚  Assertion Passed: ${actual} === ${expected}   💚💚💚`);
    return;
  }
  console.log(`💥💥💥   Assertion Failed: ${actual} !== ${expected}   💥💥💥`);
};



const countLetters = function(string) {
  const count = {}; //Variable to save the count of each letter. Save as key = letter, value = count.

  //Iterate through each letter in the passed "string"
  for (const letter of string) {
    //Ignore spaces
    if (letter !== " ") {
      //If the letter(key) exists in the object already then increment the count (value) of that letter(key).
      if (count[letter]) {
        count[letter] += 1;
      //Else the letter (key) must not exist. Therefore add the letter(key) in the object and start the count (value) at 1
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};


const results = countLetters("This is a test");
assertEqual(results["h"], 1);

const results2 = countLetters("aaaaaa");
assertEqual(results2["a"], 6);
assertEqual(results2["b"], undefined);

const results3 = countLetters("AabBcC");
assertEqual(results3["a"], 1);
assertEqual(results3["b"], 1);
assertEqual(results3["A"], 1);
assertEqual(results3["B"], 1);

