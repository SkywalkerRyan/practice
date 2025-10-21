export function isPalindrome(head: ListNode | null): boolean {
	if (!head) return false;
	if (!head.next) return true;

	let curr = head;
	let arr = [];

	while (curr.next) {
		arr.push(curr.val);
		curr = curr.next;
	}
	arr.push(curr.val);

	let len = arr.length - 1;
	for (let i = 0; i < len / 2; i++) {
		if (arr[i] !== arr[len - i]) return false;
	}

	return true;
}
