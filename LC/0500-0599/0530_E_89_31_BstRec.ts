// AlgoMap 08.
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
