/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * arrayを使うと速いがメモリが多い
 */
var convert = function(s, numRows) {
    if(numRows == 1) {
      return s
    }
    let zigzag = []
    for(let i = 0; i < numRows; i++) {
        zigzag.push([])
    }
  
    let cursor = 0
    let right = false
    for(let i = 0; i < s.length; i++) {
        zigzag[cursor].push(s.charAt(i))
        if(cursor === 0 || cursor === numRows - 1) {
            right = !right
        }
        right ? cursor++ : cursor--
    }
    let ret =''
    
    for(arr of zigzag) {
      ret += arr.join('')
    }
  
    return ret
}; 

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 配列を使わないと遅いがメモリ効率がいい
 */
var convert = function(s, numRows) {
    if(numRows == 1) {
      return s
    }
    const arr = new Array(numRows).fill('')

    let cursor = 0
    let right = false
    for(let i = 0; i < s.length; i++) {
        arr[cursor] += s.charAt(i)
        if(cursor === 0 || cursor === numRows - 1) {
            right = !right
        }
        right ? cursor++ : cursor--
    }
    return arr.join('')
    
    // return zigzag.reduce((ret,arr) => ret += arr.join(''), '')
}; 
