// Striver 14.2.3
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
	if (root === null) return new TreeNode(val);

	let cur = root;

	while (true) {
		if (cur.val < val) {
			if (cur.right !== null) cur = cur.right;
			else {
				cur.right = new TreeNode(val);
				break;
			}
		} else {
			if (cur.left !== null) cur = cur.left;
			else {
				cur.left = new TreeNode(val);
				break;
			}
		}
	}

	return root;
}
