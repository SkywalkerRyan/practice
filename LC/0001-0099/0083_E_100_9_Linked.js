// Striver ??, AlgoMap Lls 05.1

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	let current = head;

	while (current?.next) {
		if (current.val === current.next.val) current.next = current.next.next;
		else current = current.next;
	}

	return head;
};

const head = [1, 1, 2];
// const head = [1, 1, 2, 3, 3];

console.log(deleteDuplicates(head));
