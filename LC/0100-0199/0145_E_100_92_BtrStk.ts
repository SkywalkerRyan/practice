// Striver 13.1.12
function postorderTraversalIter(root: TreeNode | null): number[] {
	if (root === null) return [];

	let cur: TreeNode | null = root;
	let stack: TreeNode[] = [];
	let res: number[] = [];
	let prev: TreeNode | null = null;

	while (cur != null || stack.length > 0) {
		if (cur != null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			let temp = stack[stack.length - 1];
			if (temp.right != null && temp.right !== prev) {
				cur = temp.right;
			} else {
				res.push(temp.val);
				prev = stack.pop();
			}
		}
	}

	return res;
}
