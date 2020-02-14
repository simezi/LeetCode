/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length
    let i1 = -1
    let i2 = -1
    let state = [0, 0]

    while(true) {
        if(((nums1[i1 + 1] < nums2[i2 + 1]) && nums1[i1 + 1] != null) || nums2[i2 + 1] == null ) {
            i1++
            state[0] = state[1]
            state[1] = nums1[i1]
        } else {
            i2++
            state[0] = state[1]
            state[1] = nums2[i2]
        }

        if(((i1 + 1) + (i2 + 1)) >= (totalLength / 2) + 1) {
           break;
        }
    }
    return totalLength % 2 === 0 ? (state[0] + state[1]) / 2 : state[0]
};
