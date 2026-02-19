import { TreeNode } from '../Practices/BinaryTrees/node';

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

// 0572
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
	if (root === null) return false;

	if (isSameTree(root, subRoot)) return true;

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
	if (node1 === null && node2 === null) return true;
	if (node1 === null || node2 === null) return false;
	if (node1.val !== node2.val) return false;

	return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
}

// 0102
function levelOrder(root: TreeNode | null): number[][] {
	if (root === null) return [];

	let queue = [root];
	let res = [];

	while (queue.length > 0) {
		let len = queue.length;
		let temp = [];

		for (let i = 0; i < len; i++) {
			let cur = queue.shift();
			temp.push(cur.val);

			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
		}
		res.push(temp);
	}

	return res;
}

// 0637
function averageOfLevels(root: TreeNode | null): number[] {
	if (root === null) return [];

	let queue = [root];
	let res = [];

	while (queue.length > 0) {
		let len = queue.length;
		let tempRes = 0;
		let tempCnt = 0;

		for (let i = 0; i < len; i++) {
			let cur = queue.shift();
			tempRes += cur.val;
			tempCnt++;

			if (cur.left) queue.push(cur.left);
			if (cur.right) queue.push(cur.right);
		}

		res.push(tempRes / tempCnt);
	}

	return res;
}

// 0230
function kthSmallest(root: TreeNode | null, k: number): number {
	if (root === null) return 0;

	let res = { counter: 0, k: k, res: 0 };
	helperKthSmallest(root, res);
	return res.res;
}

function helperKthSmallest(node: TreeNode | null, res: { counter: number; k: number; res: number }): void {
	if (node === null || res.counter >= res.k) return;

	helperKthSmallest(node.left, res);
	res.counter = res.counter + 1;
	if (res.counter === res.k) {
		res.res = node.val;
		return;
	}
	helperKthSmallest(node.right, res);
}

// 0530
function getMinimumDifference(root: TreeNode | null): number {
	let res = { prev: -Infinity, min: Infinity };

	helperGetMinDiff(root, res);

	return res.min;
}

function helperGetMinDiff(node: TreeNode | null, res: { prev: number; min: number }): void {
	if (node === null) return;

	helperGetMinDiff(node.left, res);

	res.min = Math.min(res.min, Math.abs(node.val - res.prev));
	if (res.min === 1) return;

	res.prev = node.val;
	helperGetMinDiff(node.right, res);
}
