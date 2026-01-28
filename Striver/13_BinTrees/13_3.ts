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
