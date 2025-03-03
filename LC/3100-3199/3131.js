/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2)
{
  let sm1 = nums1[0];
  let sm2 = nums2[0];

  for (let i = 1; i < nums1.length; i++)
  {
    if (nums1[i] < sm1)
      sm1 = nums1[i]

    if (nums2[i] < sm2)
      sm2 = nums2[i]
  }

  return (sm2 - sm1);
};

console.log(addedInteger([2, 6, 4], num[9, 7, 5]));
console.log(addedInteger([10], num[5]));
console.log(addedInteger([1, 1, 1, 1], num[1, 1, 1, 1]));