function myAtoi1(s: string): number {
	s = s.trim();
	let num: number;
	let sign: string = '';

	for (let i = 0; i < s.length; i++) {
		if (num === undefined && sign === '' && s[i] === '-') {
			sign = '-';
			continue;
		}
		if (num === undefined && sign === '' && s[i] === '+') {
			sign = '+';
			continue;
		}
		if (s[i] >= '0' && s[i] <= '9') {
			if (num === undefined) num = parseInt(s[i]);
			else num = num * 10 + parseInt(s[i]);
			continue;
		}
		if (s[i] < '0' || s[i] > '9') {
			break;
		}
	}

	if (num === undefined) num = 0;
	if (sign === '-' && num > 2147483648) num = 2147483648;
	if ((!sign || sign === '+') && num > 2147483647) num = 2147483647;

	return sign === '-' ? 0 - num : num;
}

// console.log(myAtoi1('42'));
// console.log(myAtoi1('-91283472332'));
// console.log(myAtoi1(''));
// console.log(myAtoi1(' -042'));
// console.log(myAtoi1('1337c0d3'));
// console.log(myAtoi1('0-1'));
// console.log(myAtoi1('words and 987'));
// console.log(myAtoi1('+-12'));
// console.log(myAtoi1('  +  413'));
