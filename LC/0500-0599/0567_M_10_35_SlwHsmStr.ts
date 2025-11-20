// AlgoMap Slw 07.6

function checkInclusion(s1: string, s2: string): boolean {
	let map = new Map();

	for (let i = 0; i < s1.length; i++) {
		map.set(s1[i], (map.get(s1[i]) || 0) + 1);
	}

	let left = 0;

	for (let right = s1.length - 1; right < s2.length; right++) {
		let _map = new Map(map);

		for (let i = left; i <= right; i++) {
			let val = _map.get(s2[i]);
			if (val === 1) _map.delete(s2[i]);
			else _map.set(s2[i], val - 1);
		}

		if (_map.size === 0) return true;
		left++;
	}

	return false;
}

console.log(checkInclusion('ab', 'eidbaooo'));
// console.log(checkInclusion('ab', 'eidboaooo'));
