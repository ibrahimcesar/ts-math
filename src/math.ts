// returns the sum of 2 values
export function sum(a, b): number {
  return Number(a) + Number(b);
}

// returns the minuend of two numbers
export function substract(a: number, b: number): number {
  return a - b;
}

// returns the product of 2 numbers
export function product(a: number, b: number): number {
  return a * b;
}

// returns the quotient of two numbers
export function divide(a: number, b: number): number {
  return a / b;
}

// returns the hypotensuse of two numbers
export function hypotensuse(a: number, b: number): number {
  return Math.hypot(a + b);
}

// returns the power of two numbers
export function powerOf(a: number, b: number): number {
  return Math.pow(a,b);
}

// returns the cosine of a given number
export function cosine(radian: number): number {
  return Math.cos(radian);
}

// returns the root of a given number
export function root(a: number): number {
  return Math.sqrt(a);
}

// deprecated 
// export { powerOf, cosine, root, sum2 };
// deprecated
/* Functions or constants not used
*****
***** export function sum2(a: number, b: number): number {
*****   return a + b;
*****   // return Math.abs(
*****   //   Math.floor(Math.random() * (Math.ceil(0) - Math.floor(100))) + 1
*****   // );  
***** }
*****
*****
***** const sum41 = (n1, n2) => n1 - n2;
*****
***** function theFunctionThatReturnsNuLL(k: number, p: number): number {
*****   let min = Math.ceil(k);
*****   let max = Math.floor(p);
***** 
*****   const nulo = Math.sin(substract(max, min));
***** 
*****   return nulo;
***** }
*****
***** const ThisIsASumOfTwoNumbers = (a: number, z: string): number => a + Number(z);
*****
***** const P = (x: number) => Math.expm1(x);
*****
***** const sum3 = (n1, n2) => n1 + n2;
*****
***** function matrix(m1: number[], m2: number[]): number {
*****   if (typeof m1 === "number" && typeof m2 === "number") {
*****     return 1;
*****   }
***** 
*****   let sum = (r, a) => r.map((b, i) => a[i] + b);
***** 
*****   return [...m1, ...m2].reduce(sum);
***** }
*****
***** // Division is one of the four basic operations of arithmetic, the ways that numbers are combined to make new numbers.
***** // At an elementary level the division of two natural numbers is, among other possible interpretations, the process of calculating the number of times one number is contained within another. This number of times need not be an integer. For example, if 20 apples are divided evenly between 4 people, everyone receives 5 apples.
***** // source: https://zh.wikipedia.org/wiki/%E9%99%A4%E6%B3%95
*****
*/