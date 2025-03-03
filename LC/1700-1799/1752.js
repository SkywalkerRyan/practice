/**
 * @param {number[]} nums
 * @return {boolean}
*/
var check = function (nums)
{
  let count = 0;

  for (let i = 0; i < nums.length; i++)
  {
    if (nums[i] > nums[(i + 1) % nums.length])
    {
      count++;
    }
  }

  return (count < 2)
};

// console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
// console.log(check([1, 2, 3]));
// console.log(check([1, 1, 1]));
// console.log(check([6, 10, 6]));
// console.log(check([5, 5, 6, 6, 6, 9, 1, 2]));
// console.log(check([7, 9, 1, 1, 1, 3]));