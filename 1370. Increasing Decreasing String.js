/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  if (s.length <= 1) {
    return s;
  }
  let array = s.split("");
  let dict = {};
  for (let c of array) {
    if (dict[c] != null) {
      dict[c]++;
    } else {
      dict[c] = 1;
    }
  }
  const keys = Object.keys(dict).sort();

  let result = "";
  let count = 0;
  while (count < array.length) {
    // left to right
    for (let i = 0; i < keys.length; i++) {
      if (dict[keys[i]] > 0) {
        dict[keys[i]]--;
        result += keys[i];
        count++;
      }
    }

    // right to left
    for (let i = keys.length; i >= 0; i--) {
      if (dict[keys[i]] > 0) {
        dict[keys[i]]--;
        result += keys[i];
        count++;
      }
    }
  }
  return result;
};
