const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(string) {
  const count = {};

  for(const letter of string){
    //console.log(letter);
    if(letter !== " "){
      if(count[letter]){
        //console.log("Incement the key = 1")
        count[letter] += 1;
      }else {
        //console.log("Initially add the key = 1")
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

