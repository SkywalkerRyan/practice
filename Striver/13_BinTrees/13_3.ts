import { TreeNode } from '../../Practices/BinaryTrees/node';

// 0257
function binaryTreePaths(root: TreeNode | null): string[] {
	if (root === null) return [];

	let res = [];

	traverseBinTreePaths(root, [], res);

	return res;
}

function traverseBinTreePaths(node: TreeNode | null, cur: number[], res: string[]): void {
	if (node === null) return;

	cur.push(node.val);
	if (node.left === null && node.right === null) res.push(cur.join('->'));

	if (node.left != null) traverseBinTreePaths(node.left, cur, res);
	if (node.right != null) traverseBinTreePaths(node.right, cur, res);

	cur.pop();
}

// 0236
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null || root === p || root === q) return root;

	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);

	if (left === null) return right;
	else if (right === null) return left;
	else return root;
}

// 0662
// function widthOfBinaryTree(root: TreeNode | null): number {
// 	if (root === null) return 0;

// 	let res = { min: 0, max: 0 };

// 	traverseWidthBinTree(root, 0, 0, res);

// 	return res.max - res.min;
// }

// function traverseWidthBinTree(
// 	node: TreeNode | null,
// 	row: number,
// 	col: number,
// 	res: { min: number; max: number }
// ): void {
// 	if (node === null) return;

// 	res.min = Math.min(res.min, col);
// 	res.max = Math.max(res.max, col);

// 	if (node.left != null) traverseWidthBinTree(node.left, row + 1, col - 1, res);
// 	if (node.right != null) traverseWidthBinTree(node.right, row + 1, col + 1, res);
// }

// 0662
function widthOfBinaryTree(root: TreeNode | null): number {
	if (root === null) return 0;

	let queue: [TreeNode, number][] = [[root, 1]];
	let width = 0;

	while (queue.length > 0) {
		let len = queue.length;
		let min = queue[0][1];
		let max = queue[len - 1][1];

		let temp: [TreeNode, number][] = [];

		for (let i = 0; i < len; i++) {
			let [cur, val] = queue[i];
			let baseVal = val - min;

			if (cur.left != null) temp.push([cur.left, baseVal * 2]);
			if (cur.right != null) temp.push([cur.right, baseVal * 2 + 1]);
		}
		queue = temp;
		width = Math.max(width, max - min + 1);
	}

	return width;
}

// Striver 13.3.4
function sumOfChildren(root: TreeNode | null): void {
	if (root === null) return;

	return traverseSumOfChildren(root);
}

function traverseSumOfChildren(node: TreeNode | null): void {
	if (node === null) return;

	let sum = 0;
	if (node.left) sum += node.left.val;
	if (node.right) sum += node.right.val;

	if (sum < node.val) {
		if (node.left) node.left.val = node.val;
		if (node.right) node.right.val = node.val;
	}

	traverseSumOfChildren(node.left);
	traverseSumOfChildren(node.right);

	if (node.left || node.right) {
		let _sum = 0;
		if (node.left) _sum += node.left.val;
		if (node.right) _sum += node.right.val;
		node.val = _sum;
	}
}

// Test
const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(3);

//       10
//      /  \
//     4    6
//    / \
//   1   3

sumOfChildren(root);
console.log('After:', root.val, root.left?.val, root.right?.val, root.left.left.val, root.left.right.val);

// 0863
function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
	if (root === null) return [];

	let parents = new Map<TreeNode, TreeNode | null>();

	setParents(root, parents);

	let queue = [target];
	let visited = new Set([target]);
	let res = [];
	let distance = 0;

	while (queue.length > 0 && distance < k) {
		let len = queue.length;

		for (let i = 0; i < len; i++) {
			let cur = queue.shift();

			if (cur.left && !visited.has(cur.left)) {
				visited.add(cur.left);
				queue.push(cur.left);
			}
			if (cur.right && !visited.has(cur.right)) {
				visited.add(cur.right);
				queue.push(cur.right);
			}
			let par = parents.has(cur) ? parents.get(cur) : null;
			if (par && !visited.has(par)) {
				visited.add(par);
				queue.push(par);
			}
		}
		distance++;
	}

	for (let j = 0; j < queue.length; j++) {
		res.push(queue[j].val);
	}

	return res;
}

function setParents(root: TreeNode | null, parents: Map<TreeNode, TreeNode | null>): void {
	let queue = [root];
	parents.set(root, null);

	while (queue.length > 0) {
		let cur = queue.shift();

		if (cur.left) {
			parents.set(cur.left, cur);
			queue.push(cur.left);
		}
		if (cur.right) {
			parents.set(cur.right, cur);
			queue.push(cur.right);
		}
	}
}
