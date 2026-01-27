// 0545
function boundary(root: TreeNode | null): number[] {
	if (root === null) return [];
	if (root.left === null && root.right === null) return [root.val];

	let res = [root.val];

	res.push(...traverseLeftBoundary(root.left));

	let leafs = [];
	traverseLeafs(root, leafs);
	res.push(...leafs);

	res.push(...traverseRightBoundary(root.right));

	return res;
}

function traverseLeftBoundary(node: TreeNode | null): number[] {
	if (node === null) return [];

	let res = [];
	let cur = node;

	while (true) {
		if (cur.left === null && cur.right === null) break;

		res.push(cur.val);

		if (cur.left != null) cur = cur.left;
		else cur = cur.right;
	}

	return res;
}

function traverseLeafs(node: TreeNode | null, res: number[]): void {
	if (node === null) return;

	if (node.left === null && node.right === null) res.push(node.val);

	traverseLeafs(node.left, res);
	traverseLeafs(node.right, res);
}

function traverseRightBoundary(node: TreeNode | null): number[] {
	if (node === null) return [];

	let res = [];
	let cur = node;

	while (true) {
		if (cur.left === null && cur.right === null) break;

		res.push(cur.val);

		if (cur.right != null) cur = cur.right;
		else cur = cur.left;
	}

	return res.reverse();
}
