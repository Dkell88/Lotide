const tail = function(array) {
  if (array.length === 1) {
    return [];
  }
  return array.slice(1); //Return the all but the first element in the array.
};

module.exports = tail;
