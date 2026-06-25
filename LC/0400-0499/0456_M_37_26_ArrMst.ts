// LC 0456
// O(n), O(n)
export function find132pattern(nums: number[]): boolean {
	let stk3: number[] = [];
	let two = -Infinity;

	for (let i = nums.length - 1; i >= 0; i--) {
		let cur = nums[i];

		if (cur < two) return true;

		while (stk3.length > 0 && stk3[stk3.length - 1] < cur) {
			two = Math.max(two, stk3.pop()!);
		}
		stk3.push(cur);
	}

	return false;
}
