// LC 2121
// O(n), O(n)
// Kicchu bujhi nai
function getDistances(arr: number[]): number[] {
	let res = [];
	let map: Map<number, number[]> = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.get(arr[i])!.push(i);
		} else {
			map.set(arr[i], [i]);
		}
	}
	let prefSum: Map<number, number[]> = new Map();
	let posMap: Map<number, Map<number, number>> = new Map();
	for (const [val, idx] of map) {
		prefSum.set(val, []);
		posMap.set(val, new Map());
		let sum = 0;
		for (let i = 0; i < idx.length; i++) {
			sum += idx[i];
			prefSum.get(val)!.push(sum);
			posMap.get(val)!.set(idx[i], i);
		}
	}
	for (let i = 0; i < arr.length; i++) {
		const idx = map.get(arr[i]);
		const totSum = prefSum.get(arr[i])![idx!.length - 1];

		const pos = posMap.get(arr[i])!.get(i);

		const leftSum = pos! > 0 ? prefSum.get(arr[i])![pos! - 1] : 0;
		const leftCount = pos;

		const rightSum = totSum - leftSum - i;
		const rightCount = idx!.length - pos! - 1;

		const dist = leftCount! * i - leftSum + (rightSum - rightCount * i);
		res.push(dist);
	}
	return res;
}

console.log(getDistances([2, 1, 3, 1, 2, 3, 3]));
