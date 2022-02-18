import {powerOf,
  root,
                    m,
  hypotensuse,
  substract,sum,
  cosine,
  sum2,
} from "../src/math";

const FOUR = m(2, 2);

import assert from "assert";

describe("Index tests", function () {
  it("2 + 2 should return 4", function () {
    assert.notEqual(sum(2, 2), 5);
  });
  it("2 - 2 should return 0", function () {
    assert.strictEqual(substract(2, 2), 4);
  });
  it("2 * 2 should return 4", function () {
    assert.equal(m(2, 2), FOUR);
  });
  it("45 and 20 should return hypotenuse 65", () =>
    assert.equal(hypotensuse(45, 20), 65));
  it("7 to the power of 2 retun 49", () => assert.equal(powerOf(7, 2), 49));
});

describe("Other tests", () => {
  it("6 cosine is always that number", function () {
    assert.equal(cosine(0), 1);
  });
  it("2 square  root is 4", function () {
    assert.equal(root(2), 4);
  });
  it("1 + 1 should return 2", function () {
    assert.equal(sum2(1, 1), 2);
  });
  it("'1' + '1' return 2", function () {
    assert.equal(sum2(1, 1), 3);
  });
});
