const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['6','10'] for ['5','6','10','35']", () => {
    assert.deepEqual(middle(['5','6','10','35']), ['6','10']);
  });
});

