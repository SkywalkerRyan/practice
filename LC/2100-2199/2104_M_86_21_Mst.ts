function subArrayRanges(nums: number[]): number {
	let res = 0;

	let pseId = [];
	let pgeId = [];
	let nseId = [];
	let ngeId = [];

	let stkG = [];
	let stkL = [];

	const len = nums.length;

	for (let i = 0; i < len; i++) {
		while (stkL.length && nums[stkL[stkL.length - 1]] >= nums[i]) {
			stkL.pop();
		}
		if (stkL.length === 0) pseId[i] = -1;
		else pseId[i] = stkL[stkL.length - 1];

		while (stkG.length && nums[stkG[stkG.length - 1]] < nums[i]) {
			stkG.pop();
		}
		if (stkG.length === 0) pgeId[i] = -1;
		else pgeId[i] = stkG[stkG.length - 1];

		stkL.push(i);
		stkG.push(i);
	}

	stkL = [];
	stkG = [];
	for (let i = len - 1; i >= 0; i--) {
		while (stkL.length && nums[stkL[stkL.length - 1]] > nums[i]) {
			stkL.pop();
		}
		if (stkL.length === 0) nseId[i] = len;
		else nseId[i] = stkL[stkL.length - 1];

		while (stkG.length && nums[stkG[stkG.length - 1]] <= nums[i]) {
			stkG.pop();
		}
		if (stkG.length === 0) ngeId[i] = len;
		else ngeId[i] = stkG[stkG.length - 1];

		stkL.push(i);
		stkG.push(i);
	}

	for (let i = 0; i < len; i++) {
		let nextS = nseId[i] - i;
		let prevS = i - pseId[i];
		let nextG = ngeId[i] - i;
		let prevG = i - pgeId[i];

		let small = nextS * prevS * nums[i];
		let great = nextG * prevG * nums[i];

		res += great - small;
	}

	return res;
}
