// 0144
function preorderTraversalIterative(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let stack = [];
	stack.push(root);

	while (stack.length > 0) {
		let temp = stack.pop();

		res.push(temp.val);

		if (temp.right) stack.push(temp.right);
		if (temp.left) stack.push(temp.left);
	}

	return res;
}
