// Striver 14.2.1
function ceiling(root: TreeNode | null, target: number): TreeNode | null {
	if (root === null) return root;

	let res = { ceil: null };

	return ceilingHelper(root, target, res);
}

function ceilingHelper(node: TreeNode | null, target: number, res: { ceil: number | null }): TreeNode | null {
	if (node === null) return node;

	if (node.val === target) return node;
	else if (node.val < target) return ceilingHelper(node.right, target, res);
	else {
		res.ceil = node;
		return ceilingHelper(node.left, target, res);
	}
}

// Striver 14.2.1
function ceiling(root: TreeNode | null, target: number): TreeNode | null {
	if (root === null) return root;

	if (root.val === target) return root;
	if (root.val < target) return ceiling(root.right, target);

	let ceil = ceiling(root.left, target);
	return ceil !== null ? ceil : root;
}

// Striver 14.2.2
function ceilAndFloor(root: TreeNode | null, target: number): number[] {
	if (root === null) return [];

	let res = { ceil: null, floor: null };

	helper(root, target, res);

	return [res.ceil, res.floor];
}

function helper(node: TreeNode | null, target: number, res: { ceil: number | null; floor: number | null }): void {
	if (node === null) return;

	if (node.val === target) {
		res.ceil = node.val;
		res.floor = node.val;
		return;
	} else if (node.val < target) {
		res.floor = node.val;
		return helper(node.right, target, res);
	} else {
		res.ceil = node.val;
		return helper(node.left, target, res);
	}
}
