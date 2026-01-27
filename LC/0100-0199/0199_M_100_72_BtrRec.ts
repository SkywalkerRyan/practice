// Striver 13.2.11
function rightSideView(root: TreeNode | null): number[] {
	if (root === null) return [];

	let map = new Map<number, number>();

	traverseRighSideView(root, 0, map);

	return [...map.values()];
}

function traverseRighSideView(node: TreeNode | null, row: number, map: Map<number, number>): void {
	if (node === null) return;

	map.set(row, node.val);

	if (node.left != null) traverseRighSideView(node.left, row + 1, map);
	if (node.right != null) traverseRighSideView(node.right, row + 1, map);
}
