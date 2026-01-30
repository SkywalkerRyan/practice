// Striver 13.3.12
// Morris Traversal
function inorderTraversal(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let cur = root;

	while (cur !== null) {
		if (cur.left === null) {
			res.push(cur.val);
			cur = cur.right;
		} else {
			let prev = cur.left;
			while (prev.right !== null && prev.right !== cur) {
				prev = prev.right;
			}

			if (prev.right === null) {
				prev.right = cur;
				res.push(cur.val);
				cur = cur.left;
			} else {
				prev.right = null;
				cur = cur.right;
			}
		}
	}

	return res;
}
