export class BasicMath {
  /**
   * Sum two numbers and return the result
   */
  sum(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  /**
   * Subtract two numbers
   */
  subtract(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }

  /**
   * Takes the base expression taken to a specified exponent
   */
  power(base: number, exponent: number): number {
    return base ** exponent;
  }

  /**
   * Divide two numbers
   */
  divide(x: number, y: number) {
    return x / y;
  }

  /**
   * Multiply the first number by the second number and return the result
   */
  multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }
}
