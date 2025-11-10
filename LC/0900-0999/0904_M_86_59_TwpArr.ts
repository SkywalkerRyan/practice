function totalFruits(fruits: number[]) {
	let left = 0;
	let right = 0;

	let map = new Map();
	let res = 0;

	while (right < fruits.length) {
		map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

		while (map.size > 2) {
			let temp = map.get(fruits[left]);
			temp === 1 ? map.delete(fruits[left]) : map.set(fruits[left], temp - 1);
			left++;
		}
		right++;
		res = Math.max(res, right - left);
	}

	return res;
}
