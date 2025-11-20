// 2807

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

	let prev = head;
	let curr = head.next;

	while (curr) {
		let gcd = findGCD(prev.val, curr.val);

		let temp = new ListNode(gcd, curr);
		prev.next = temp;

		prev = curr;
		curr = curr.next;
	}

	return head;
}

function findGCD(big: number, small: number): number {
	while (small !== 0) {
		let temp = small;
		small = big % small;
		big = temp;
	}

	return Math.abs(big);
}

console.log(findGCD(6, 10));
