// AlgoMap Stk 04.3

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
				stk.push(stk.pop() * stk.pop());
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
