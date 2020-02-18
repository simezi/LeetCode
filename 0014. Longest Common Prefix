/** vertical search
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return ''
  }
  const min = Math.min(...(strs.map(str => str.length)))
  let ret = ''
  for(let i = 0; i < min; i++) {
     const c = strs[0].charAt(i)
     if(strs.find(str => str.charAt(i) !== c)) {
       break
     }
    ret += c
  }
  return ret
};
