import assert from "assert";
import { AdvancedMath } from "../src/advancedMath";

let advancedMath: AdvancedMath;
describe("Advanced arithmetic", () => {
  beforeEach(() => {
    advancedMath = new AdvancedMath();
  });

  it("should calculate the radians of 0 and return 1", function () {
    assert.equal(advancedMath.cosine(0), 1);
  });

  it("should calculate the square root 4 and return 2", function () {
    assert.strictEqual(advancedMath.squareRoot(4), 2);
  });

  it("should calculate the hypotenuse of 45 and 20 and return 49.24428900898052", () => {
    assert.strictEqual(advancedMath.hypotenuse(45, 20), 49.24428900898052);
  });
});
