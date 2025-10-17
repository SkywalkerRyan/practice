function isIsomorphic1(s: string, t: string): boolean {
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

console.log(isIsomorphic1('egg', 'add'));
console.log(isIsomorphic1('foo', 'bar'));
console.log(isIsomorphic1('paper', 'title'));
console.log(isIsomorphic1('badc', 'baba'));
