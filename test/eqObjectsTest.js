const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {
  it(`returns true for [{c: "1", d: ["2", 3]} === {d: ["2", 3], c: "1"}`, () => {
    const cd = {c: "1", d: ["2", 3]};
    const dc = {d: ["2", 3], c: "1"};
    assert.strictEqual(eqObjects(cd, dc), true);
  });
});