/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) {
        return s
    }

    function countLength(s, left, right) {
        let l = left
        let r = right
        while (l >= 0 && s.charAt(l) === s.charAt(r) && r < s.length) {
            l--
            r++
        }
        return r - l - 1
    }

    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        let len1 = countLength(s, i, i)
        let len2 = countLength(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - parseInt((len - 1) / 2)
            end = i + len / 2
        }
    }
    return s.substring(start , end + 1)
}
