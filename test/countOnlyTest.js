const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {
  it("returns obj.a = 3 for ['a','a', 'b', 'c', 'd', 'e', 'a'] & obj {a: true}", () => {
    const arr = ['a','a', 'b', 'c', 'd', 'e', 'a'];
    const obj = {
      a: true,
      d: true,
      b: false,
      f: true
    };
    assert.deepEqual(countOnly(arr, obj)['a'],3);
  });

  it("returns firstNames.[Jason] = 1 for ['a','a', 'b', 'c', 'd', 'e', 'a'] & obj { Jason: true,", () => {
    const firstNames = ["Karl","Salima","Fang","Kavith","Agouhanna", "Jason","Salima"];
    const obj = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Joe": true};
    assert.deepEqual(countOnly(firstNames, obj)['Jason'],1);
  });
});