// Striver 14.2.1
function ceiling(root: TreeNode | null, target: number): TreeNode | null {
	if (root === null) return root;

	let res = { ceil: null };

	return ceilingHelper(root, target, res);
}

function ceilingHelper(node: TreeNode | null, target: number, res: { ceil: number | null }): TreeNode | null {
	if (node === null) return node;

	if (node.val === target) return node;
	else if (node.val < target) return ceilingHelper(node.right, target, res);
	else {
		res.ceil = node;
		return ceilingHelper(node.left, target, res);
	}
}

// Striver 14.2.1
function ceiling(root: TreeNode | null, target: number): TreeNode | null {
	if (root === null) return root;

	if (root.val === target) return root;
	if (root.val < target) return ceiling(root.right, target);

	let ceil = ceiling(root.left, target);
	return ceil !== null ? ceil : root;
}

// Striver 14.2.2
function ceilAndFloor(root: TreeNode | null, target: number): number[] {
	if (root === null) return [];

	let res = { ceil: null, floor: null };

	helper(root, target, res);

	return [res.ceil, res.floor];
}

function helper(node: TreeNode | null, target: number, res: { ceil: number | null; floor: number | null }): void {
	if (node === null) return;

	if (node.val === target) {
		res.ceil = node.val;
		res.floor = node.val;
		return;
	} else if (node.val < target) {
		res.floor = node.val;
		return helper(node.right, target, res);
	} else {
		res.ceil = node.val;
		return helper(node.left, target, res);
	}
}

// 0701
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
	if (root === null) return new TreeNode(val);

	let cur = root;

	while (true) {
		if (cur.val < val) {
			if (cur.right !== null) cur = cur.right;
			else {
				cur.right = new TreeNode(val);
				break;
			}
		} else {
			if (cur.left !== null) cur = cur.left;
			else {
				cur.left = new TreeNode(val);
				break;
			}
		}
	}

	return root;
}

// 0701
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
	if (root === null) return new TreeNode(val);

	if (val < root.val) root.left = insertIntoBST(root.left, val);
	else root.right = insertIntoBST(root.right, val);

	return root;
}

// 0450
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
	if (root === null) return root;

	if (key < root.val) {
		root.left = deleteNode(root.left, key);
	} else if (key > root.val) {
		root.right = deleteNode(root.right, key);
	} else {
		if (root.left === null) return root.right;
		if (root.right === null) return root.left;

		let cur: TreeNode = findMin(root.right);
		root.val = cur.val;
		root.right = deleteNode(root.right, cur.val);
	}

	return root;
}

function findMin(node: TreeNode) {
	while (node.left !== null) node = node.left;
	return node;
}

// 0230
function kthSmallest(root: TreeNode | null, k: number): number {
	if (root === null) return 0;

	let counter = { target: k, cnt: 0 };
	let res = [];

	helperKthSmallest(root, counter, res);

	return res[k - 1];
}

function helperKthSmallest(node: TreeNode | null, counter: { target: number; cnt: number }, res: number[]): void {
	if (node === null || counter.cnt === counter.target) return;

	helperKthSmallest(node.left, counter, res);
	res.push(node.val);
	counter.cnt = counter.cnt + 1;
	helperKthSmallest(node.right, counter, res);
}

// 0230
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

// 0098
function isValidBST(root: TreeNode | null): boolean {
	if (root === null) return true;

	let res = [];

	return helperIsValidBST(root, res);
}

function helperIsValidBST(node: TreeNode | null, res: number[]): boolean {
	if (node === null) return true;

	if (!helperIsValidBST(node.left, res)) return false;
	if (res.length > 0 && node.val <= res[res.length - 1]) return false;
	res.push(node.val);
	if (!helperIsValidBST(node.right, res)) return false;

	return true;
}
// 0098
function isValidBST(root: TreeNode | null): boolean {
	if (root === null) return true;

	let prev = { val: null };

	return helperIsValidBST(root, prev);
}

function helperIsValidBST(node: TreeNode | null, prev: { val: number | null }): boolean {
	if (node === null) return true;

	if (!helperIsValidBST(node.left, prev)) return false;
	if (prev.val !== null && node.val <= prev.val) return false;
	prev.val = node.val;
	if (!helperIsValidBST(node.right, prev)) return false;

	return true;
}

// 0098
function isValidBST(root: TreeNode | null): boolean {
	return helperIsValidBST(root, null, null);
}

function helperIsValidBST(node: TreeNode | null, min: number | null, max: number | null): boolean {
	if (node === null) return true;

	if (min !== null && node.val <= min) return false;
	if (max !== null && node.val >= max) return false;

	return helperIsValidBST(node.left, min, node.val) && helperIsValidBST(node.right, node.val, max);
}

// 0235
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null) return root;

	if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
	if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);

	return root;
}

// 1008
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

// 1008
function bstFromPreorder(preorder: number[]): TreeNode | null {
	let param = { idx: 0 };
	return helperBstFromPreorder(preorder, -Infinity, Infinity, param);
}

function helperBstFromPreorder(
	// node: TreeNode | null,
	preorder: number[],
	min: number | null,
	max: number | null,
	param: { idx: number }
): TreeNode | null {
	if (param.idx >= preorder.length || preorder[param.idx] > max || preorder[param.idx] < min) return null;

	let node = new TreeNode(preorder[param.idx]);
	param.idx = param.idx + 1;

	node.left = helperBstFromPreorder(preorder, min, node.val, param);
	node.right = helperBstFromPreorder(preorder, node.val, max, param);

	return node;
}

// 0285
function predecessor(root: TreeNode | null, target: number): number {
	if (root === null) return 0;

	let res = { pred: null };

	helperPredecessor(root, target, res);
	return res.pred;
}

function helperPredecessor(node: TreeNode | null, target: number, res: { pred: number }): void {
	if (node === null) return;

	if (node.val < target) {
		res.pred = node.val;
		helperPredecessor(node.right, target, res);
	} else helperPredecessor(node.left, target, res);

	return;
}
