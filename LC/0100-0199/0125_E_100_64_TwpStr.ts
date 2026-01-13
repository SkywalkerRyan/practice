function isPalindrome(s: string): boolean {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let result = true;

	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) return false;

		left++;
		right--;
	}

	return result;
}
