export class AdvancedMath {
  /**
   * Get the hypotenuse of two numbers
   */
  hypotenuse(firstNumber: number, secondNumber: number): number {
    return Math.hypot(firstNumber, secondNumber);
  }

  /**
   * Returns the cosine of a number
   */
  cosine(radian: number) {
    return Math.cos(radian);
  }

  /**
   * Returns the square root of x
   */
  squareRoot(x: number) {
    return Math.sqrt(x);
  }
}
