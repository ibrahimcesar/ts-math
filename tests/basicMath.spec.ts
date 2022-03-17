import { BasicMath } from "../src/basicMath";

import assert from "assert";

let basicMath: BasicMath;
describe("Basic arithmetic", () => {
  beforeEach(() => {
    basicMath = new BasicMath();
  });

  it("2 + 2 should return 4", () => {
    assert.strictEqual(basicMath.sum(2, 2), 4);
  });

  it("2 - 2 should return 0", () => {
    assert.strictEqual(basicMath.subtract(2, 2), 0);
  });

  it("2 * 2 should return 4", () => {
    assert.strictEqual(basicMath.multiply(2, 2), 4);
  });

  it("7 to the power of 2 should return 49", () => {
    assert.strictEqual(basicMath.power(7, 2), 49);
  });

  it("should divide 4 by 2 and return 2", () => {
    assert.strictEqual(basicMath.divide(4, 2), 2);
  });
});
