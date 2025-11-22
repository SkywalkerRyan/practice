// Striver 9.3.6

function sumSubarrayMins(arr: number[]): number {
	let res = 0;

	let pseId = [];
	let nseId = [];

	let stk = [];
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		while (stk.length && arr[stk[stk.length - 1]] >= arr[i]) {
			stk.pop();
		}
		if (stk.length === 0) pseId[i] = -1;
		else pseId[i] = stk[stk.length - 1];

		stk.push(i);
	}

	stk = [];
	for (let i = len - 1; i >= 0; i--) {
		while (stk.length && arr[stk[stk.length - 1]] > arr[i]) {
			stk.pop();
		}
		if (stk.length === 0) nseId[i] = len;
		else nseId[i] = stk[stk.length - 1];

		stk.push(i);
	}

	for (let i = 0; i < len; i++) {
		let next = Math.max(nseId[i] - i, 1);
		let prev = Math.max(i - pseId[i], 1);

		res += next * prev * arr[i];
	}

	return res % (10 ** 9 + 7);
}

// console.log(sumSubarrayMins([3, 1, 2, 4]));
// console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
console.log(sumSubarrayMins([71, 55, 82, 55]));
