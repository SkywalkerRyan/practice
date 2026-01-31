// Striver 14.1.2
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (root === null) return null;

	let cur = root;

	while (cur !== null) {
		if (cur.val < val) cur = cur.right;
		else if (val < cur.val) cur = cur.left;
		else return cur;
	}
	return null;
}
