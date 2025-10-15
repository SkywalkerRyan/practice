// @todo try using dutch national flag algo

function sortZeroOneTwo(nums: number[]): void {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
	}

	let id = 0;
	for (let i = 0; i < 3; i++) {
		const count = map.get(i);
		for (let j = 0; j < count; j++) {
			nums[id] = i;
			id++;
		}
	}

	console.log(nums);
}

sortZeroOneTwo([2, 0, 2, 1, 1, 0]);
sortZeroOneTwo([2, 0, 1]);
