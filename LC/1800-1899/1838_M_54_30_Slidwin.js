/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    let maxFreq = 0;
    let curSum = 0;

    nums.sort( (a, b) => a - b );

    for( let left = 0, right = 0; right < nums.length; ++right )
    {
        curSum += nums[right];

        while( curSum + k < nums[right] * (right - left + 1) )
        {
            curSum -= nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1)
    }

    return maxFreq;
};

// console.log( maxFrequency([1,2,4], 5) );
// console.log( maxFrequency([1,4,8,13], 5) );
console.log( maxFrequency([3, 9, 6], 5) );