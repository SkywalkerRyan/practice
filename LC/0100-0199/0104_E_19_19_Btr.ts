// Striver 13.2.1, AlgoMap 08.2
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
