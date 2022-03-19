import {
  sum,
  substract,
  product,
  divide,
  hypotensuse,
  powerOf,
  cosine,
  root,
} from "../src/math";

import assert from "assert";

describe("Index tests", () => {
  it("2 + 2 should return 4", () =>
    assert.equal(sum(2, 2), 4));

  it("2 - 2 should return 0", () =>
    assert.equal(substract(2, 2), 0));

  it("2 * 2 should return 4", () =>
    assert.equal(product(2, 2), 4));

  it("4 / 2 should return 2", () =>
    assert.equal(divide(4, 2), 2));

  it("45 and 20 should return hypotenuse 65", () =>
    assert.equal(hypotensuse(45, 20), 65));
  
  it("7 to the power of 2 retun 49", () =>
    assert.equal(powerOf(7, 2), 49));
});

describe("Other tests", () => {
  it("0 cosine is always 1", () =>
    assert.equal(cosine(0), 1));

  it("Square root of 9 is 3", () =>
    assert.equal(root(9), 3));

  it("1 + 1 should return 2", () =>
    assert.equal(sum(1, 1), 2));

  it("'1' + '1' return 2", () =>
    assert.equal(sum('1', '1'), 2));
});