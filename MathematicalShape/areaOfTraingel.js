const a = 5;
const b = 6;
const c = 7;
const semiPerimeter = (a + b + c) / 2;
const areaOfTriangle = Math.sqrt(
  semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c),
);
console.log(areaOfTriangle);