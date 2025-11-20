// 682
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

// 0150
function evalRPN(tokens: string[]): number {
	let stk = [];

	for (const item of tokens) {
		switch (item) {
			case '+':
				stk.push(stk.pop() + stk.pop());
				break;
			case '-':
				let min = stk.pop();
				stk.push(stk.pop() - min);
				break;
			case '*':
				stk.push(Math.trunc(stk.pop() * stk.pop()));
				break;
			case '/':
				let div = stk.pop();
				stk.push(Math.trunc(stk.pop() / div));
				break;

			default:
				stk.push(Number(item));
				break;
		}
	}

	return stk[0];
}

// console.log(evalRPN(['2', '1', '+', '3', '*']));
// console.log(evalRPN(['4', '13', '5', '/', '+']));

// 0739
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
