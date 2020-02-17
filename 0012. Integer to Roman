/**
 * plain but not fast
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
      const table = 
          [
            ['','I','II','III','IV','V','VI','VII','VIII','IX'],
            ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
            ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
            ['','M','MM','MMM']
          ]

    let letArray = ['','','','']
    for(let i = 0; num >= 1; i++) {
        let digit = parseInt(num % 10)
        letArray[4 - i] = table[i][digit]
        num /= 10
    }
    return letArray.join('')
    
};

