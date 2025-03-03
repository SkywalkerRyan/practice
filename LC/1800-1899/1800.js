/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums)
{
  let maxCur = maxTot = nums[0];

  for (let i = 1; i < nums.length; i++)
  {
    if (nums[i] <= nums[i - 1])
      maxCur = 0;

    maxCur += nums[i];

    if (maxCur > maxTot)
      maxTot = maxCur;
  }

  return maxTot;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))
// console.log(maxAscendingSum([10, 20, 30, 40, 50]))
// console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]))
// console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9]))