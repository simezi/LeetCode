/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const str = '' + num
    const arr = str.split('').map(x => Number(x))
    
    function helper(arr) {
        const max = Math.max(...arr)
        if(arr[0] == max) {
            return [arr[0], ...helper(arr.slice(1))]
        } else {
            const target = arr.lastIndexOf(max)
            arr.splice(target, 1, arr.splice(0, 1, arr[target])[0])
            return arr            
        }
    }
    
    return Number(helper(arr).join(''))
};
