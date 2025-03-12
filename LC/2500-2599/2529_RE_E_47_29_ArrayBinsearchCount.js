/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums)
{
	let neg = 0;
	let pos = 0;

	for (let i = 0; i < nums.length; i++)
	{
		if (nums[i] > 0) pos++
		if (nums[i] < 0) neg++
	}

	return pos > neg ? pos : neg
};

// const testVal = [-2, -1, -1, 1, 2, 3];
// const testVal = [-3, -2, -1, 0, 0, 1, 2];
const testVal = [5, 20, 66, 1314];

console.log(maximumCount(testVal));