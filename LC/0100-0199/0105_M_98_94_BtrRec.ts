// Striver 13.3.9
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	let inMap = new Map<number, number>();

	for (let i = 0; i < inorder.length; i++) {
		inMap.set(inorder[i], i);
	}

	let cur = buildHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);

	return cur;
}

function buildHelper(
	preOrder: number[],
	preStart: number,
	preEnd: number,
	inOrder: number[],
	inStart: number,
	inEnd: number,
	inMap: Map<number, number>
): TreeNode | null {
	if (preStart > preEnd || inStart > inEnd) return null;

	let node = new TreeNode(preOrder[preStart]);

	let inRoot = inMap.get(node.val);
	let leftNums = inRoot - inStart;

	node.left = buildHelper(preOrder, preStart + 1, preStart + leftNums, inOrder, inStart, inRoot - 1, inMap);
	node.right = buildHelper(preOrder, preStart + leftNums + 1, preEnd, inOrder, inRoot + 1, inEnd, inMap);

	return node;
}
