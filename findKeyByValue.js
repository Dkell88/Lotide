const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return ;
  }
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(objIn, valueIn) {
  const values = Object.values(objIn);
  //console.log(values);
  //console.log(val);
  //console.log(`${!values.includes(val)}`);
  if(!values.includes(valueIn)){
    //console.log(`${valueIn} Sucks!!`);
    return;
  }
  //console.log("\n----- We are entering the for loop -----")
  for(const tempValue in objIn){
    //console.log(`Key: ${tempValue} \tValue within that key ${objIn[tempValue]}`);
    if (objIn[tempValue] === valueIn){
      //console.log("Found you !!")
      return tempValue;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
