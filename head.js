const head = function(array) {
  if (array.length === 0) {
    return [];
  }
  return array[0]; //Return the first element of an array
};

module.exports = head;