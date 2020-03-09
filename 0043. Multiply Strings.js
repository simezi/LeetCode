/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == "0" || num2 == "0") {
    return "0";
  }
  const num1Int = num1
    .split("")
    .map(x => parseInt(x))
    .reverse();
  const num2Int = num2
    .split("")
    .map(x => parseInt(x))
    .reverse();
  const result = [];
  for (let i = 0; i < num1Int.length; i++) {
    for (let j = 0; j < num2Int.length; j++) {
      const multi = num1Int[i] * num2Int[j];
      const second = multi % 10;
      const first = (multi - second) / 10;
      result[i + j] = (result[i + j] || 0) + second;
      result[i + j + 1] = (result[i + j + 1] || 0) + first;
    }
  }

  for (let i = 0; i < result.length; i++) {
    let current = result[i];
    if (current < 10) {
      continue;
    }
    for (let k = 0; current > 0; k++) {
      const least = current % 10;
      if (k == 0) {
        result[i] = least;
      } else {
        result[i + k] = (result[i + k] || 0) + least;
      }
      current = (current - least) / 10;
    }
  }
  if (result[result.length - 1] === 0) {
    result.pop();
  }
  return result.reverse().join("");
};
