function largestRectangleArea(heights: number[]): number {
	let res = 0;

	let pse = [];
	let nse = [];
	let stk = [];
	const len = heights.length;
	for (let i = 0; i < len; i++) {
		while (stk.length && heights[stk[stk.length - 1]] >= heights[i]) {
			stk.pop();
		}

		if (stk.length === 0) pse[i] = -1;
		else pse[i] = stk[stk.length - 1];

		stk.push(i);
	}

	stk = [];
	for (let i = len - 1; i >= 0; i--) {
		while (stk.length && heights[stk[stk.length - 1]] > heights[i]) {
			stk.pop();
		}

		if (stk.length === 0) nse[i] = len;
		else nse[i] = stk[stk.length - 1];

		stk.push(i);
	}

	for (let i = 0; i < heights.length; i++) {
		let area = (nse[i] - pse[i] - 1) * heights[i];

		res = Math.max(res, area);
	}

	return res;
}
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// console.log(largestRectangleArea([2, 4]));
