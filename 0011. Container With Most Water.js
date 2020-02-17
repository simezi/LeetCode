/**
Brute Force
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            let water = (j - i) * Math.min(height[j], height[i])
            if(max < water) {
                max = water
            }
        }
    }
    return max
};
