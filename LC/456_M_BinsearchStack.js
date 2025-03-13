/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums)
{
	let min = nums[0];
	let max = 1;
	let st = [min];

	for (let i = 0; i < nums.length - 2; i++)
	{
		if (st.length === 1)
		{
			if ()
		}
	}


	// let st = nums[0];

	// for (let i = 0; i < nums.length - 2; i++)

	// 	if (nums[i] < nums[i + 1] && nums[i] < nums[i + 2] && nums[i + 2] < nums[i + 1])
	// 	{
	// 		return true;
	// 	}

	// return false;
};

// const testVal = [1, 2, 3, 4];
// const testVal = [3, 1, 4, 2];
// const testVal = [-1, 3, 2, 0];
const testVal = [3, 5, 0, 3, 4];

console.log(find132pattern(testVal));