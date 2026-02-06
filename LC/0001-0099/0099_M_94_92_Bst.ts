// Striver 14.2.12
function recoverTree(root: TreeNode | null): void {
	if (root === null) return;

	let res = { first: null, mid: null, second: null };
	let vals = [];

	getVals(root, vals);

	let prev = null;

	while (vals.length) {
		let cur = getNext(vals);
		if (prev !== null && prev.val > cur.val) {
			if (res.first === null) {
				res.first = prev;
				res.second = cur;
			} else res.second = cur;
		}

		prev = cur;
	}

	let temp = res.second.val;

	res.second.val = res.first.val;
	res.first.val = temp;
}

function getNext(vals: TreeNode[]): TreeNode | null {
	let cur = vals.pop() ?? null;
	if (cur.right) getVals(cur.right, vals);
	return cur;
}

function getVals(node: TreeNode | null, vals: TreeNode[]): void {
	if (node === null) return;

	while (node !== null) {
		vals.push(node);
		node = node.left;
	}
}
