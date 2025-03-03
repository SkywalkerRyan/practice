/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums)
{
  let longInc = longDec = 1;
  let globInc = globDec = 1;

  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i] > nums[i - 1])
    {
      longInc++;
      longDec = 1;
    }
    else if (nums[i] < nums[i - 1])
    {
      longDec++;
      longInc = 1;
    }
    else
    {
      longInc = 1;
      longDec = 1;
    }

    if (longInc > globInc)
      globInc = longInc;

    if (longDec > globDec)
      globDec = longDec;
  }

  return (globInc > globDec ? globInc : globDec);
};

// console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
// console.log(longestMonotonicSubarray([3, 3, 3, 3]));
console.log(longestMonotonicSubarray([3, 2, 1]));