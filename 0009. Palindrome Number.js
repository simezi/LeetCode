/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    
    if(x < 10){
        return true
    }
    
    if(x % 10 === 0) {
        return false
    }
    
    let str = "" + x
    let arr = str.split('')
    while(arr.length > 1) {
        let left = arr.shift()
        let right = arr.pop()
        if(left != right) {
            return false
        }
    }
    return true
   
};
