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
