// AlgoMap Lls 05.8

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

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
