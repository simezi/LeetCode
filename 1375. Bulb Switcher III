/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
  let result = 0;
  let onBulbs = new Set();
  let max = light[0];
  for (let i = 0; i < light.length; i++) {
    onBulbs.add(light[i] - 1);
    if (max < light[i]) {
      max = light[i];
    }
    if (onBulbs.size == max) {
      result++;
    }
  }
  return result;
};
