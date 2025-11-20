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

// console.log(findGCD(6, 10));

// 0138
function copyRandomList(head: _Node | null): _Node | null {
	let dummy = new _Node(0, null, null);
	let map = new Map();

	let curr = head;
	let _curr = dummy;

	while (curr) {
		let temp = new _Node(curr.val, null, null);
		_curr.next = temp;

		map.set(curr, temp);

		curr = curr.next;
		_curr = _curr.next;
	}

	curr = head;
	_curr = dummy.next;

	while (curr) {
		_curr.random = map.get(curr.random) || null;

		curr = curr.next;
		_curr = _curr.next;
	}

	return dummy.next;
}
