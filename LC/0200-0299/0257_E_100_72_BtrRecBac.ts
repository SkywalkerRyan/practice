// Striver 13.3.1
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
