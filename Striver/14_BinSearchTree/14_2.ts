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

// 0701
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

// 0701
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
	if (root === null) return new TreeNode(val);

	if (val < root.val) root.left = insertIntoBST(root.left, val);
	else root.right = insertIntoBST(root.right, val);

	return root;
}

// 0450
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
