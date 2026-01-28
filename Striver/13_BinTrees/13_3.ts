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
