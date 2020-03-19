let dict = [
  "FizzBuzz",
  null,
  null,
  "Fizz",
  null,
  "Buzz",
  "Fizz",
  null,
  null,
  "Fizz",
  "Buzz",
  null,
  "Fizz",
  null,
  null
];
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let fb = num => dict[num % 15] || "" + num;
  let array = [];
  for (let i = 1; i < n + 1; i++) {
    array.push(fb(i));
  }

  return array;
};
