// Striver 13.1.11
function postorderTraversalIterative(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let stack1 = [];
	let stack2 = [];
	stack1.push(root);

	while (stack1.length > 0) {
		let temp = stack1.pop();
		stack2.push(temp);

		if (temp.left) stack1.push(temp.left);
		if (temp.right) stack1.push(temp.right);
	}
	while (stack2.length > 0) {
		let temp = stack2.pop();
		res.push(temp.val);
	}

	return res;
}
