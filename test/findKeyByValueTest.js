const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it(`returns drama for {sciFi: "The Expanse",comedy: "Brooklyn Nine-Nine",drama:  "The Wire}, "The Wire";`, () => {
    const bestTVShowsByGenre = {sciFi: "The Expanse",comedy: "Brooklyn Nine-Nine",drama:  "The Wire"};
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`returns undefined for  {sciFi: "The Expanse",comedy: "Brooklyn Nine-Nine",drama:  "The Wire}, "That '70s Show";`, () => {
    const bestTVShowsByGenre = {sciFi: "The Expanse",comedy: "Brooklyn Nine-Nine",drama:  "The Wire"};
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});

