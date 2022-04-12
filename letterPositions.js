const letterPositions = function(string) {
  const results = {}; //Resulting object to be retuned.
  let index = 0; //Create an index for the for..of loop (because why not)
  for (const letter of string) {
    //Ignore spaces
    if (letter !== " ") {
      //Is the letter already included in the object (if)? If yes then push another index location of that letter
      if (results[letter]) {
        results[letter].push(index);
      } else {
      //Else create a key for that letter and include the value as an array with the value of the index location.
        results[letter] = [index];
      }
    }
    index ++;
  }
  return results;
};
module.exports = letterPositions;