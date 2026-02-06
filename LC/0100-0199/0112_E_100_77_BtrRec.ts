// AlgoMap 08.7
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	return helperPathSum(root, targetSum, 0);
}

function helperPathSum(node: TreeNode | null, target: number, cur: number): boolean {
	if (node === null) return false;

	cur = cur + node.val;
	if (node.left === null && node.right === null && cur === target) return true;

	return helperPathSum(node.left, target, cur) || helperPathSum(node.right, target, cur);
}
