// Striver 1.5.8
function isPalindrome(s: string): boolean {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let result = checkPalindrome(s);

	return result;
}

function checkPalindrome(s) {
	if (s.length === 1 || s.length === 0) return true;

	if (s[0] === s[s.length - 1]) {
		return checkPalindrome(s.substring(1, s.length - 1));
	} else return false;
}

// console.log(checkPalindrome("hannah"))
