
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const complexNum1 = parse(num1);
  const complexNum2 = parse(num2);
  const result = multiply(complexNum1, complexNum2);
  return toString(result);
};

function parse(num) {
  const [first, second] = num.split('+');
  let real = 0,
    imaginary = 0;
  if (first.includes('i')) {
    imaginary = parseImaginary(first);
  } else if (second) {
    real = Number(first);
    imaginary = parseImaginary(second);
  } else {
    real = Number(first);
  }

  return { real, imaginary };
}

function parseImaginary(str) {
  return Number(str.slice(0, -1));
}

function multiply(complexNum1, complexNum2) {
  const real =
    complexNum1.real * complexNum2.real -
    complexNum1.imaginary * complexNum2.imaginary;
  const imaginary =
    complexNum1.real * complexNum2.imaginary + complexNum2.real *
    complexNum1.imaginary;
  return { real, imaginary };
}

function toString(complex) {
  return `${complex.real}+${complex.imaginary}i`;
}

complexNumberMultiply('1+-1i', '1+-1i')
complexNumberMultiply('1+-1i', '0+0i')
