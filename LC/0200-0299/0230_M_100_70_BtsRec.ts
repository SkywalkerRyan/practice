// Striver 14.2.5, AlgoMap 08.11
function kthSmallest(root: TreeNode | null, k: number): number {
	if (root === null) return 0;

	let counter = { target: k, cnt: 0, res: 0 };

	helperKthSmallest(root, counter);

	return counter.res;
}

function helperKthSmallest(node: TreeNode | null, counter: { target: number; cnt: number; res: number }): void {
	if (node === null || counter.cnt >= counter.target) return;

	helperKthSmallest(node.left, counter);
	counter.cnt = counter.cnt + 1;
	if (counter.cnt === counter.target) {
		counter.res = node.val;
		return;
	}
	helperKthSmallest(node.right, counter);
}
