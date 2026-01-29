import { TreeNode } from '../../Practices/BinaryTrees/node';

// 0104
function maxDepth(root: TreeNode | null): number {
	let res = 0;

	let queue = [root];

	while (queue.length > 0) {
		let len = queue.length;

		for (let i = 0; i < len; i++) {
			let temp = queue.shift();

			if (temp.left) queue.push(temp.left);
			if (temp.right) queue.push(temp.right);
		}
		res++;
	}

	return res;
}

// 0104
function maxDepth(root: TreeNode | null): number {
	if (root === null) return 0;

	let res = 0;

	res = traverseMaxDepth(root, res);

	return res;
}

function traverseMaxDepth(node: TreeNode | null, count: number): number {
	if (node === null) return count;

	let leftCnt = 0;
	let rightCnt = 0;

	if (node.left != null) leftCnt = traverseMaxDepth(node.left, count);
	if (node.right != null) rightCnt = traverseMaxDepth(node.right, count);

	return 1 + Math.max(leftCnt, rightCnt);
}

// 0104
function maxDepthRec(root: TreeNode | null): number {
	if (root === null) return 0;

	return 1 + Math.max(maxDepthRec(root.left), maxDepthRec(root.right));
}

// 0110
function isBalanced(root: TreeNode | null): boolean {
	if (root === null) return true;

	let cnt = traverseIsBalanced(root);

	return cnt !== -1;
}

function traverseIsBalanced(root: TreeNode | null): number {
	if (root === null) return 0;

	let leftCnt = traverseIsBalanced(root.left);
	if (leftCnt === -1) return -1;
	let rightCnt = traverseIsBalanced(root.right);
	if (rightCnt === -1) return -1;

	if (Math.abs(leftCnt - rightCnt) > 1) return -1;
	return 1 + Math.max(leftCnt, rightCnt);
}

// 0543
function diameterOfBinaryTree(root: TreeNode | null): number {
	if (root === null) return 0;

	let max = { val: 0 };
	traverseDiameter(root, max);

	return max.val;
}

function traverseDiameter(node: TreeNode | null, max: { val: number }): number {
	if (node === null) return 0;

	let leftCnt = traverseDiameter(node.left, max);
	let rightCnt = traverseDiameter(node.right, max);

	max.val = Math.max(max.val, leftCnt + rightCnt);

	return 1 + Math.max(leftCnt, rightCnt);
}

// 0124
function maxPathSum(root: TreeNode | null): number {
	if (root === null) return 0;

	let res = { sum: -Infinity };

	traverseMaxPathSum(root, res);

	return res.sum;
}

function traverseMaxPathSum(node: TreeNode | null, res: { sum: number }): number {
	if (node === null) return 0;

	let leftSum = traverseMaxPathSum(node.left, res);
	let rightSum = traverseMaxPathSum(node.right, res);
	leftSum = leftSum > 0 ? leftSum : 0;
	rightSum = rightSum > 0 ? rightSum : 0;

	let totalSum = node.val + leftSum + rightSum;

	res.sum = Math.max(res.sum, totalSum);

	return node.val + Math.max(leftSum, rightSum);
}

// 100
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;
	if (p.val !== q.val) return false;

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// 0103
function zigzagLevelOrderStk(root: TreeNode | null): number[][] {
	if (root === null) return [];

	let res = [];
	let queue = [root];
	let forward = true;

	while (queue.length > 0) {
		let len = queue.length;
		let temp = [];

		for (let index = 0; index < len; index++) {
			let pop = queue.shift();

			if (pop.left != null) queue.push(pop.left);
			if (pop.right != null) queue.push(pop.right);

			temp.push(pop.val);
		}
		if (!forward) temp.reverse();

		res.push([...temp]);
		forward = !forward;
	}

	return res;
}

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

// 0987
function verticalTraversal(root: TreeNode | null): number[][] {
	let map = new Map();

	traverseVertical(root, 0, 0, map);

	console.log(map);

	let sorted = [...map.keys()].sort((a, b) => a - b);
	return sorted.map((col) =>
		map
			.get(col)
			.sort((a, b) => a[0] - b[0] || a[1] - b[1])
			.map((pair) => pair[1])
	);
}

function traverseVertical(node: TreeNode | null, row: number, col: number, map: Map<number, [number, number][]>): void {
	if (node === null) return;

	if (!map.has(col)) map.set(col, []);
	map.get(col).push([row, node.val]);

	traverseVertical(node.left, row + 1, col - 1, map);
	traverseVertical(node.right, row + 1, col + 1, map);
}

// Striver 13.2.9, Wrong, need bfs.
// function topView(node: TreeNode | null): number[] {
// 	if (node === null) return;

// 	let map = new Map();

// 	traverseTopView(node, 0, map);

// 	let sorted = [...map.keys()].sort((a, b) => a - b);
// 	return sorted.map((col) => map.get(col));
// }

// function traverseTopView(node: TreeNode | null, col: number, map: Map<number, number>): void {
// 	if (node === null) return;

// 	if (!map.has(col)) map.set(col, node.val);

// 	traverseTopView(node.left, col - 1, map);
// 	traverseTopView(node.right, col + 1, map);
// }

// Striver 13.2.9
function topView(node: TreeNode | null): number[] {
	if (node === null) return [];

	let map = new Map<number, number>();
	let queue: [TreeNode, number][] = [[node, 0]];

	while (queue.length > 0) {
		let [cur, col] = queue.shift();

		if (!map.has(col)) map.set(col, cur.val);

		if (cur.left != null) queue.push([cur.left, col - 1]);
		if (cur.right != null) queue.push([cur.right, col + 1]);
	}
	let sorted = [...map.keys()].sort((a, b) => a - b);
	return sorted.map((col) => map.get(col));
}

// Striver 13.2.10
function botView(node: TreeNode | null): number[] {
	if (node === null) return [];

	let map = new Map<number, number>();
	let queue: [TreeNode, number][] = [[node, 0]];

	while (queue.length > 0) {
		let [cur, col] = queue.shift();

		map.set(col, cur.val);

		if (cur.left) queue.push([cur.left, col - 1]);
		if (cur.right) queue.push([cur.right, col + 1]);
	}

	let sorted = [...map.keys()].sort((a, b) => a - b);
	return sorted.map((col) => map.get(col));
}

// 0199 Works
// function rightSideView(root: TreeNode | null): number[] {
// 	if (root === null) return [];

// 	let map = new Map<number, number>();

// 	traverseRighSideView(root, 0, map);

// 	return [...map.values()];
// }

// function traverseRighSideView(node: TreeNode | null, row: number, map: Map<number, number>): void {
// 	if (node === null) return;

// 	map.set(row, node.val);

// 	if (node.left != null) traverseRighSideView(node.left, row + 1, map);
// 	if (node.right != null) traverseRighSideView(node.right, row + 1, map);
// }

// 0199 but better
function rightSideView(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];

	traverseRighSideView(root, 0, res);

	return res;
}

function traverseRighSideView(node: TreeNode | null, row: number, res: number[]): void {
	if (node === null) return;

	if (res.length === row) res.push(node.val);

	if (node.right != null) traverseRighSideView(node.right, row + 1, res);
	if (node.left != null) traverseRighSideView(node.left, row + 1, res);
}

// 0101
function isSymmetric(root: TreeNode | null): boolean {
	if (root === null) return true;
	if (root.left === null && root.right === null) return true;

	return traverseSymmetry(root.left, root.right);
}

function traverseSymmetry(node1: TreeNode | null, node2: TreeNode | null): boolean {
	if (node1 === null && node2 === null) return true;
	if (node1 === null || node2 === null) return false;
	if (node1.val !== node2.val) return false;

	return traverseSymmetry(node1.left, node2.right) && traverseSymmetry(node1.right, node2.left);
}
