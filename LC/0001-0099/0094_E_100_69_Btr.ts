// Striver 13.1.10
function inorderTraversal(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let cur = root;
	let stack = [];

	while (true) {
		if (cur != null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			if (stack.length === 0) break;
			let temp = stack.pop();
			res.push(temp.val);
			cur = temp.right;
		}
	}

	return res;
}
