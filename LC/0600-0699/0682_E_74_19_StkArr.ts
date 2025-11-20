// AlgoMap 04.1

function calPoints(operations: string[]): number {
	let res = 0;
	let stk: number[] = [];

	for (const item of operations) {
		if (!isNaN(Number(item))) stk.push(Number(item));
		if (item === 'C') stk.pop();
		if (item === 'D') stk.push(stk[stk.length - 1] * 2);
		if (item === '+') stk.push(stk[stk.length - 1] + stk[stk.length - 2]);
	}

	for (const j of stk) {
		res += j;
	}

	return res;
}

// console.log(calPoints(['5', '2', 'C', 'D', '+']));
