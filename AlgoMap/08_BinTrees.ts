// 0226
function invertTree(root: TreeNode | null): TreeNode | null {
	helperInvert(root);

	return root;
}

function helperInvert(node: TreeNode | null): void {
	if (node === null) return;

	let temp = node.left;
	node.left = node.right;
	node.right = temp;

	helperInvert(node.left);
	helperInvert(node.right);
}

// 0104
function maxDepth(root: TreeNode | null): number {
	if (root === null) return 0;

	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// 0110
function isBalanced(root: TreeNode | null): boolean {
	let val = helperIsBalanced(root);

	return val !== -1;
}

function helperIsBalanced(root: TreeNode | null): number {
	if (root === null) return 0;

	let leftCnt = helperIsBalanced(root.left);
	if (leftCnt === -1) return -1;
	let rightCnt = helperIsBalanced(root.right);
	if (rightCnt === -1) return -1;

	if (Math.abs(leftCnt - rightCnt) > 1) return -1;
	return 1 + Math.max(leftCnt, rightCnt);
}

// 0543
function diameterOfBinaryTree(root: TreeNode | null): number {
	if (root === null) return 0;

	let res = { width: 0 };

	helperDiameter(root, res);

	return res.width;
}

function helperDiameter(node: TreeNode | null, res: { width: number }): number {
	if (node === null) return 0;

	let leftCnt = helperDiameter(node.left, res);
	let rightCnt = helperDiameter(node.right, res);

	res.width = Math.max(res.width, leftCnt + rightCnt);

	return 1 + Math.max(leftCnt, rightCnt);
}

// 0100
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (p === null && q === null) return true;
	if (p === null || q === null || p.val !== q.val) return false;

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// 0101
function isSymmetric(root: TreeNode | null): boolean {
	if (root === null) return true;
	if (root.left === null && root.right === null) return true;
	if (root.left === null || root.right === null) return false;

	return helperIsSymmetric(root.left, root.right);
}

function helperIsSymmetric(node1: TreeNode | null, node2: TreeNode | null): boolean {
	if (node1 === null && node2 === null) return true;
	if (node1 === null || node2 === null || node1.val !== node2.val) return false;

	return helperIsSymmetric(node1.left, node2.right) && helperIsSymmetric(node2.left, node1.right);
}

// 0112
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	return helperPathSum(root, targetSum, 0);
}

function helperPathSum(node: TreeNode | null, target: number, cur: number): boolean {
	if (node === null) return false;

	cur = cur + node.val;
	if (node.left === null && node.right === null && cur === target) return true;

	return helperPathSum(node.left, target, cur) || helperPathSum(node.right, target, cur);
}
