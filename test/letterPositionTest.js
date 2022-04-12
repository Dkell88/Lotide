const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for (hello).e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [2,5] for (This is a test).i", () => {
    assert.deepEqual(letterPositions("This is a test").i, [2,5]);
  });
});