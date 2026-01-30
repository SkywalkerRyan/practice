// Striver 13.3.10
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	let inMap = new Map<number, number>();

	for (let i = 0; i < inorder.length; i++) {
		inMap.set(inorder[i], i);
	}

	let cur = buildHelper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, inMap);

	return cur;
}

function buildHelper(
	inOrder: number[],
	inStart: number,
	inEnd: number,
	postOrder: number[],
	postStart: number,
	postEnd: number,
	inMap: Map<number, number>
): TreeNode | null {
	if (inStart > inEnd || postStart > postEnd) return null;

	let node = new TreeNode(postOrder[postEnd]);

	let inRoot = inMap.get(node.val);
	let leftNums = inRoot - inStart;

	node.left = buildHelper(inOrder, inStart, inRoot - 1, postOrder, postStart, postStart + leftNums - 1, inMap);
	node.right = buildHelper(inOrder, inRoot + 1, inEnd, postOrder, postStart + leftNums, postEnd - 1, inMap);

	return node;
}

// 0094
function inorderTraversal(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let cur = root;

	while (cur !== null) {
		if (cur.left === null) {
			res.push(cur.val);
			cur = cur.right;
		} else {
			let prev = cur.left;
			while (prev.right !== null && prev.right !== cur) {
				prev = prev.right;
			}

			if (prev.right === null) {
				prev.right = cur;
				cur = cur.left;
			} else {
				prev.right = null;
				res.push(cur.val);
				cur = cur.right;
			}
		}
	}

	return res;
}
