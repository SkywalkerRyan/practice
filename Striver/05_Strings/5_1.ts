function removeOuterParentheses(s: string): string {
	let count: number = 0;
	let result: string = '';

	for (const char of s) {
		if (char === '(') count++;
		if (count > 1) result += char;
		if (char === ')') count--;
	}

	return result;
}

// console.log(removeOuterParentheses('(()())(())'));
// console.log(removeOuterParentheses('(()())(())(()(()))'));
// console.log(removeOuterParentheses('()()'));

// function reverseWords(s: string): string {
// 	const words = s.trim().split(' ');
// 	let res = '';

// 	for (let i = words.length - 1; i >= 0; i--) {
// 		console.log(words[i]);

// 		if (words[i] !== '') {
// 			res += words[i];

// 			if (i !== 0) res += ' ';
// 		}
// 	}

// 	return res;
// }

function reverseWords(s: string): string {
	const words = s.split(' ');
	let res = [];

	for (let i = words.length - 1; i >= 0; i--) {
		console.log(words[i]);

		if (words[i]) {
			res.push(words[i]);
		}
	}

	return res.join(' ');
}

// console.log(reverseWords('the sky is blue'));
// console.log(reverseWords('  hello world  '));
// console.log(reverseWords('a good   example'));

function largestOddNumber(num: string): string {
	for (let i = num.length - 1; i >= 0; i--) {
		if (parseInt(num[i]) % 2 === 0) num = num.slice(0, -1);
		else return num;
	}

	return '';
}
// console.log(largestOddNumber('52'));
// console.log(largestOddNumber('4206'));
// console.log(largestOddNumber('35427'));

function longestCommonPrefix(strs: string[]): string {
	let pref: string = '';
	strs = strs.sort();

	for (let i = 0; i < strs[0].length; i++) {
		if (strs[0][i] === strs[strs.length - 1][i]) pref += strs[0][i];
		else break;
	}

	return pref;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

function isIsomorphic(s: string, t: string): boolean {
	let map1 = new Map();
	let map2 = new Map();

	for (let i = 0; i < s.length; i++) {
		if (map1.has(s[i]) && map1.get(s[i]) !== t[i]) return false;
		if (map2.has(t[i]) && map2.get(t[i]) !== s[i]) return false;

		map1.set(s[i], t[i]);
		map2.set(t[i], s[i]);
	}

	return true;
}

// console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('foo', 'bar'));
// console.log(isIsomorphic('paper', 'title'));
// console.log(isIsomorphic('badc', 'baba'));

// Doesnt work for all cases
// function rotateString(s: string, goal: string): boolean {
// 	let startingIndex: number = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		if (s[0] === goal[i]) {
// 			startingIndex = i;
// 			break;
// 		}
// 	}

// 	for (let i = 0; i < s.length; i++) {
// 		let goalIndex: number = (i + startingIndex) % s.length;
// 		if (s[i] !== goal[goalIndex]) return false;
// 	}

// 	return true;
// }

function rotateString(s: string, goal: string): boolean {
	for (let i = 0; i < s.length; i++) {
		goal = goal.substring(1) + goal.substring(0, 1);
		if (s === goal) return true;
	}

	return false;
}

// console.log(rotateString('abcde', 'cdeab'));
// console.log(rotateString('abcde', 'abced'));
// console.log(rotateString('defdefdefabcabc', 'defdefabcabcdef'));

// function isAnagram(s: string, t: string): boolean {
// 	s = s.split('').sort().join('');
// 	t = t.split('').sort().join('');

// 	if (s === t) return true;

// 	return false;
// }

function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (!map.has(t[i])) return false;
		else map.set(t[i], map.get(t[i]) - 1);
	}

	for (const [key, val] of map) {
		if (val !== 0) return false;
	}

	return true;
}

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
