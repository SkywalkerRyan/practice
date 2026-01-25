import { TreeNode } from '../../Practices/BinaryTrees/node';
import { Queue } from '../../Practices/Queue/queue.js';
// 0144
function preorderTraversal(root: TreeNode | null): number[] {
	let res = [];

	travPreOrder(res, root);

	return res;
}

function travPreOrder(res: number[], node: TreeNode | null): void {
	if (node === null) return;

	res.push(node.val);
	travPreOrder(res, node.left);
	travPreOrder(res, node.right);
}

// 0094
function inorderTraversal(root: TreeNode | null): number[] {
	let res = [];

	travInOrder(res, root);

	return res;
}

function travInOrder(res: number[], node: TreeNode | null): void {
	if (node === null) return;

	travInOrder(res, node.left);
	res.push(node.val);
	travInOrder(res, node.right);
}

// 0145
function postorderTraversal(root: TreeNode | null): number[] {
	let res = [];

	travPostOrder(res, root);

	return res;
}

function travPostOrder(res: number[], node: TreeNode | null): void {
	if (node === null) return;

	travPostOrder(res, node.left);
	travPostOrder(res, node.right);
	res.push(node.val);
}

// 0102
function levelOrder(root: TreeNode | null): number[][] {
	if (root === null) return;

	let res = [];

	let queue = [root];

	while (queue.length > 0) {
		let queueSize = queue.length;
		let tempRes = [];

		for (let i = 0; i < queueSize; i++) {
			let val = queue.shift();

			tempRes.push(val.val);

			if (val.left) queue.push(val.left);
			if (val.right) queue.push(val.right);
		}
		res.push(tempRes);
	}

	return res;
}
