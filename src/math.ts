//=====================================================================
//=============== four basic operations of arithmetic tests ===========

export function sum(addend_: number, addend__: number): number {
  return addend_ + addend__
}

export function sumString(addend_: string, addend__: string): number {
  return Number(addend_) + Number(addend__)
}

export function difference(minuend: number, subtraend: number): number {
  return minuend - subtraend
}

export function product(factor_: number, factor__: number): number {
  return factor_ * factor__
}

// Division is one of the four basic operations of arithmetic,
// the ways that numbers are combined to make new numbers.
// At an elementary level the division of two natural numbers is, 
//among other possible interpretations, 
//the process of calculating the number of times one number is contained within another. 
//This number of times need not be an integer. 
//For example, if 20 apples are divided evenly between 4 people, everyone receives 5 apples.
// source: https://zh.wikipedia.org/wiki/%E9%99%A4%E6%B3%95
export function division(numerator: number, denominator: number): number {
  return numerator / denominator
}

//=====================================================================
//============================= OTHER TESTS ===========================

export function powerOf(base: number, power: number): number {
  return Math.pow(base, power)
}

export function cosine(radian: number) {
  return Math.cos(radian)
}

export function hypotenuse(side: number, otherSide: number) {
  return Math.hypot(side + otherSide)
}

export function root(radicand: number) {
  return Math.sqrt(radicand)
}
