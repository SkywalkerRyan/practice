function mergeAlternately1(word1: string, word2: string): string {
	let res = '';

	let i = 0;

	while (word1[i] || word2[i]) {
		if (word1[i]) res += word1[i];
		if (word2[i]) res += word2[i];
		i++;
	}

	return res;
}

// console.log(mergeAlternately1('abc', 'pqr'));
// console.log(mergeAlternately1('ab', 'pqrs'));
console.log(mergeAlternately1('abcd', 'pq'));
