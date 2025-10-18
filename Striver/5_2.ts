function frequencySort(s: string): string {
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

	let newStr: string = '';
	for (const [key, val] of map) {
		for (let i = 0; i < val; i++) {
			newStr += key;
		}
	}

	return newStr;
}

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));

function maxDepth(s: string): number {
	let maxDepth: number = 0;
	let temp: number = 0;

	for (const char of s) {
		if (char === '(') temp++;
		if (char === ')') temp--;

		if (temp > maxDepth) maxDepth = temp;
	}

	return maxDepth;
}

// console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
// console.log(maxDepth('(1)+((2))+(((3)))'));
// console.log(maxDepth('()(())((()()))'));

function romanToInt(s: string): number {
	let val: number = 0;

	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 1 && romanMap.get(s[i]) < romanMap.get(s[i + 1])) {
			let tempVal: number = romanMap.get(s[i + 1]) - romanMap.get(s[i]);
			val += tempVal;
			i++;
		} else val += romanMap.get(s[i]);
	}

	return val;
}

const romanMap = new Map([
	['I', 1],
	['V', 5],
	['X', 10],
	['L', 50],
	['C', 100],
	['D', 500],
	['M', 1000],
]);

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));

function myAtoi(s: string): number {
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

// console.log(myAtoi('42'));
// console.log(myAtoi('-91283472332'));
// console.log(myAtoi(''));
// console.log(myAtoi(' -042'));
// console.log(myAtoi('1337c0d3'));
// console.log(myAtoi('0-1'));
// console.log(myAtoi('words and 987'));
// console.log(myAtoi('+-12'));
// console.log(myAtoi('  +  413'));

// function uniqueCharInSubstring(nums: string, k: number): number {
// 	let count: number = 0;

// 	let left: number = 0;
// 	let right: number = 1;

// 	while (right < nums.length) {
// 		let temp: string = '';
// 		for (let i = left; i <= right; i++) {
// 			temp += nums[i];
// 		}

// 		console.log('temp : ', temp);

// 		const tempCount: number = new Set(temp).size;
// 		if (tempCount < k) right++;
// 		else if (tempCount > k) left++;
// 		else {
// 			count++;
// 			right++;
// 		}
// 	}

// 	return count;
// }

function uniqueCharInSubstring(nums: string, k: number): number {
	let count: number = 0;

	for (let i = 0; i < nums.length; i++) {
		let temp: string = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			temp += nums[j];

			if (new Set(temp).size === k) {
				console.log(temp);
				count++;
			}
		}
	}

	return count;
}

// console.log(uniqueCharInSubstring('pqpqs', 2));
// console.log(uniqueCharInSubstring('abcbaa', 3));
