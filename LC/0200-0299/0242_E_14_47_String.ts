function isAnagram1(s: string, t: string): boolean {
	s = s.split('').sort().join('');
	t = t.split('').sort().join('');
	if (s === t) return true;
	return false;
}

console.log(isAnagram1('anagram', 'nagaram'));
console.log(isAnagram1('rat', 'car'));
