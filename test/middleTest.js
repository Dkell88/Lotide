const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[5,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle(["this", 'is', 'the', 'middle','of', 'my', 'array']), ['middle']);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]