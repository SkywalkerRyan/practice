function productExceptSelf(nums: number[]): number[] {
	let res = Array(nums.length).fill(1);

	let prod = 1;
	for (let i = 0; i < nums.length; i++) {
		res[i] *= prod;
		prod *= nums[i];
	}

	prod = 1;
	for (let j = nums.length - 1; j >= 0; j--) {
		res[j] *= prod;
		prod *= nums[j];
	}

	return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
