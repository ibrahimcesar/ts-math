export const sum = (firstAddend: number, secondAddend: number): number => {
    return firstAddend + secondAddend;
};

export const subtract = (minuend: number, subtrahend: number) => {
    return minuend - subtrahend;
};

export const multiplication = (
    multiplicand: number,
    multiplier: number
): number => {
    return multiplicand * multiplier;
};

export const getHypotenuse = (firstLeg: number, secondLeg: number) => {
    if (typeof firstLeg === "number" && typeof secondLeg === "number") {
        return Math.hypot(firstLeg + secondLeg);
    }

    return null;
};

export const powerOf = (base: number, exponent: number): number => {
    return base ** exponent;
};

export const getOfRadianCosine = (radian: number) => Math.cos(radian);

export const squareRoot = (radicand: number) => Math.sqrt(radicand);
