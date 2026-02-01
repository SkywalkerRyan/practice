// Striver 14.1.4
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
	if (root === null) return root;

	if (key < root.val) {
		root.left = deleteNode(root.left, key);
	} else if (key > root.val) {
		root.right = deleteNode(root.right, key);
	} else {
		if (root.left === null) return root.right;
		if (root.right === null) return root.left;

		let cur: TreeNode = findMin(root.right);
		root.val = cur.val;
		root.right = deleteNode(root.right, cur.val);
	}

	return root;
}

function findMin(node: TreeNode) {
	while (node.left !== null) node = node.left;
	return node;
}
