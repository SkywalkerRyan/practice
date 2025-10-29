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

function longestPalindrome(s: string): string {
	if (s.length === 0) return '';
	if (s.length === 1) return s;

	let res: string = '';
	let length: number = 0;
	let start: number = 0;
	let end: number = 0;

	for (let i = 1; i < s.length; i++) {
		let left: number = i - 1;
		let right: number = i + 1;
		let tempLength: number = 1;
		while (left >= 0 && right < s.length) {
			if (s[left] === s[right]) {
				tempLength += 2;
				if (tempLength > length) {
					length = tempLength;
					start = left;
					end = right;
				}
				left--;
				right++;
			} else break;
		}

		left = i - 1;
		right = i;
		tempLength = 0;
		while (left >= 0 && right < s.length) {
			if (s[left] === s[right]) {
				tempLength += 2;
				if (tempLength > length) {
					length = tempLength;
					start = left;
					end = right;
				}
				left--;
				right++;
			} else break;
		}
	}

	for (let i = start; i <= end; i++) {
		res += s[i];
	}

	return res;
}

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('bb'));

// Time limit exceeded
// function beautySum(s: string): number {
// 	let sum = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		let temp = s[i] + s[i + 1];
// 		for (let j = i + 2; j < s.length; j++) {
// 			temp += s[j];
// 			sum += calcBeauty(temp);
// 		}
// 	}

// 	return sum;
// }
// function calcBeauty(s: string): number {
// 	let map = new Map();
// 	for (const ch of s) map.set(ch, (map.get(ch) || 0) + 1);

// 	const values = [...map.values()];
// 	const max = Math.max(...values);
// 	const min = Math.min(...values);

// 	return max - min;
// }
function beautySum(s: string): number {
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		let map = new Map();

		for (let j = i; j < s.length; j++) {
			let temp = s[j];

			map.set(temp, (map.get(temp) || 0) + 1);
			const values = [...map.values()];
			const max = Math.max(...values);
			const min = Math.min(...values);

			sum += max - min;
		}
	}

	return sum;
}

console.log(beautySum('aabcb'));
console.log(beautySum('aabcbaa'));
