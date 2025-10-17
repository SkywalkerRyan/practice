function largestOddNumber1(num: string): string {
	for (let i = num.length - 1; i >= 0; i--) {
		if (parseInt(num[i]) % 2 === 0) num = num.slice(0, -1);
		else return num;
	}

	return '';
}
console.log(largestOddNumber1('52'));
console.log(largestOddNumber1('4206'));
console.log(largestOddNumber1('35427'));
