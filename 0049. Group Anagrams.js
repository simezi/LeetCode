/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  function strToMap(str) {
    let result = {};
    for (let c of str) {
      if (result[c]) {
        result[c]++;
      } else {
        result[c] = 1;
      }
    }
    let entries = Object.entries(result);
    entries.sort();
    return [
      entries.reduce((prev, [key, count]) => (prev += key + count), ""),
      str
    ];
  }
  
  function strToMap2(str) {
    return [str.split("").sort().join(""), str]    
  }

  let result = {};
  for (let str of strs) {
    const [key, value] = strToMap2(str);
    if (result[key]) {
      result[key].push(value);
    } else {
      result[key] = [value];
    }
  }
  return Object.value
