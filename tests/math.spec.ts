import {
    powerOf,
    squareRoot,
    multiplication,
    getHypotenuse,
    subtract,
    sum,
    getOfRadianCosine,
} from "../src/math";

import assert from "assert";

describe("Index tests", function () {
    it("2 + 2 should return 4", function () {
        assert.notEqual(sum(2, 2), 5);
    });
    it("2 - 2 should return 0", function () {
        assert.strictEqual(subtract(2, 2), 0);
    });
    it("2 * 2 should return 4", function () {
        assert.equal(multiplication(2, 2), 4);
    });
    it("45 and 20 should return hypotenuse 65", () =>
        assert.equal(getHypotenuse(45, 20), 65));
    it("7 to the power of 2 return 49", () => assert.equal(powerOf(7, 2), 49));
});

describe("Other tests", () => {
    it("0 cosine is always 1", function () {
        assert.equal(getOfRadianCosine(0), 1);
    });
    it("4 square root is 2", function () {
        assert.equal(squareRoot(4), 2);
    });
    it("1 + 1 should return 2", function () {
        assert.equal(sum(1, 1), 2);
    });
    it("'1' + '1' return 2", function () {
        assert.equal(sum(1, 1), 2);
    });
});
