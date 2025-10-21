function deleteMiddle(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return null;

	let prev = null;
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
	}

	if (fast.next) {
		prev = slow;
		slow = slow.next;
	}

	prev.next = slow.next;

	return head;
}
