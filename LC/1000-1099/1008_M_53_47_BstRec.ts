// Striver 14.2.8
function bstFromPreorder(preorder: number[]): TreeNode | null {
	if (preorder.length === 0) return null;

	let inorder = [...preorder].sort((a, b) => a - b);

	let inMap = new Map();

	for (let i = 0; i < inorder.length; i++) {
		inMap.set(inorder[i], i);
	}

	let cur = helperBstFromPreorder(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);

	return cur;
}

function helperBstFromPreorder(
	preorder: number[],
	preStart: number,
	preEnd: number,
	inorder: number[],
	inStart: number,
	inEnd: number,
	inMap: Map<number, number>
): TreeNode | null {
	if (preStart > preEnd || inStart > inEnd) return null;

	let node = new TreeNode(preorder[preStart]);

	let inRoot = inMap.get(node.val);
	let leftNums = inRoot - inStart;

	node.left = helperBstFromPreorder(preorder, preStart + 1, preStart + leftNums, inorder, inStart, inRoot - 1, inMap);
	node.right = helperBstFromPreorder(preorder, preStart + leftNums + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);

	return node;
}
