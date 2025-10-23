function mergeAlternately2(word1: string, word2: string): string {
	let res = [];

	let i = 0;

	while (word1[i] || word2[i]) {
		if (word1[i]) res.push(word1[i]);
		if (word2[i]) res.push(word2[i]);
		i++;
	}

	return res.join('');
}

// console.log(mergeAlternately2('abc', 'pqr'));
// console.log(mergeAlternately2('ab', 'pqrs'));
console.log(mergeAlternately2('abcd', 'pq'));
