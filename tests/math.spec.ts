import {
  sum,
  sumString,
  difference,
  product,
  division,
  powerOf,
  cosine,
  hypotenuse,
  root
} from "../src/math";



import assert from "assert";

describe("four basic operations of arithmetic tests", function () {

  it("2 + 2 should return 4", () =>
    assert.strictEqual(sum(2, 2), 4));

  it("1 + 1 should return 2", () =>
    assert.strictEqual(sum(1, 1), 2));

  it("'1' + '1' return 2", () =>
    assert.strictEqual(sumString('1', '1'), 2));

  it("'1.1' + '1' return 2.1", () =>
    assert.strictEqual(sumString('1.1', '1'), 2.1));

  it("2 - 2 should return 0", () =>
    assert.strictEqual(difference(2, 2), 0));

  it("2 * 2 should return 4", () =>
    assert.strictEqual(product(2, 2), 4));

  it("20 / 4 should return 5", () =>
    assert.strictEqual(division(20, 4), 5));

  it("8 / 5 should return 1.6", () =>
    assert.strictEqual(division(8, 5), 1.6));

});

describe("Other tests", () => {

  it("7 to the power of 2 retun 49", () =>
    assert.equal(powerOf(7, 2), 49));

  it("6 cosine is always that number -> 1", () =>
    assert.equal(cosine(0), 1));

  it("45 and 20 should return hypotenuse 65", () =>
    assert.equal(hypotenuse(45, 20), 65));

  it("4 square root is 2", () =>
    assert.equal(root(4), 2));

});
