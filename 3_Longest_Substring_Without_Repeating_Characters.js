/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let current = []
    for(let i = 0; i < s.length; i++){
        const c = s.charAt(i)
        if(current.includes(c)) {
            current.splice(0, current.indexOf(c) + 1)
        }
        current.push(c)
        if(current.length > max) {
            max = current.length
        }
    }
    return max
};
