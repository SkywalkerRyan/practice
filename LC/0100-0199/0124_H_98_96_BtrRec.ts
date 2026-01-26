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
