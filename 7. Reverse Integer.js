/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = '' + x
//    const abs = parseInt(str.split('').reverse().join('')) 
    let abs = []
    for(let i = 0; i < str.length; i++) {
      abs.push(str.charAt(str.length - i - 1))
    }
    
    abs = parseInt(abs.join(''))

    if(abs > Math.pow(2,31) - 1) {
        return 0
    }
    
    return abs * ( x < 0 ? -1 : 1)
};
