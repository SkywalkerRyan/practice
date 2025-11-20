// AlgoMap Stk 04.5

function dailyTemperatures(temperatures: number[]): number[] {
	let res = [];
	let stk = [];

	for (let i = temperatures.length - 1; i >= 0; i--) {
		while (stk.length && temperatures[stk[stk.length - 1]] <= temperatures[i]) stk.pop();

		res[i] = stk.length ? stk[stk.length - 1] - i : 0;
		stk.push(i);
	}

	return res;
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 40, 50, 60]));
