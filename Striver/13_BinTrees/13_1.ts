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
	if (root === null) return [];

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

// 0144
function preorderTraversalIterative(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let stack = [];
	stack.push(root);

	while (stack.length > 0) {
		let temp = stack.pop();

		res.push(temp.val);

		if (temp.right) stack.push(temp.right);
		if (temp.left) stack.push(temp.left);
	}

	return res;
}

// 0094
function inorderTraversalIterative(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let cur = root;
	let stack = [];

	while (true) {
		if (cur != null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			if (stack.length === 0) break;
			let temp = stack.pop();
			res.push(temp.val);
			cur = temp.right;
		}
	}

	return res;
}

// 0145
function postorderTraversalIterative(root: TreeNode | null): number[] {
	if (root === null) return [];

	let res = [];
	let stack1 = [];
	let stack2 = [];
	stack1.push(root);

	while (stack1.length > 0) {
		let temp = stack1.pop();
		stack2.push(temp);

		if (temp.left) stack1.push(temp.left);
		if (temp.right) stack1.push(temp.right);
	}
	while (stack2.length > 0) {
		let temp = stack2.pop();
		res.push(temp.val);
	}

	return res;
}

// 0145
function postorderTraversalIter(root: TreeNode | null): number[] {
	if (root === null) return [];

	let cur: TreeNode | null = root;
	let stack: TreeNode[] = [];
	let res: number[] = [];
	let prev: TreeNode | null = null;

	while (cur != null || stack.length > 0) {
		if (cur != null) {
			stack.push(cur);
			cur = cur.left;
		} else {
			let temp = stack[stack.length - 1];
			if (temp.right != null && temp.right !== prev) {
				cur = temp.right;
			} else {
				res.push(temp.val);
				prev = stack.pop();
			}
		}
	}

	return res;
}

// Striver 13.1.13
function allTraversal(root: TreeNode | null): number[][] {
	let resPre = [];
	let resPost = [];
	let resIn = [];

	travAllOrder(root, resPre, resIn, resPost);

	return [resPre, resIn, resPost];
}

function travAllOrder(node: TreeNode | null, resPre: number[], resIn: number[], resPost: number[]): void {
	if (node === null) return;

	resPre.push(node.val);
	travAllOrder(node.left, resPre, resIn, resPost);
	resIn.push(node.val);
	travAllOrder(node.right, resPre, resIn, resPost);
	resPost.push(node.val);
}
