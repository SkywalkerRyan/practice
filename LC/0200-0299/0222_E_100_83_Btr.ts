// Striver 13.3.7
function countNodes(root: TreeNode | null): number {
	if (root === null) return 0;

	let left = root.left ? root.left : null;
	let right = root.right ? root.right : null;
	let leftHeight = 1;
	let rightHeight = 1;

	while (left != null) {
		leftHeight++;
		left = left.left;
	}
	while (right != null) {
		rightHeight++;
		right = right.right;
	}

	if (leftHeight === rightHeight) return 2 ** leftHeight - 1;

	return 1 + countNodes(root.left) + countNodes(root.right);
}
