// Striver 14.2.11
function findTarget(root: TreeNode | null, k: number): boolean {
	if (root === null) return false;

	let lefts = [];
	let rights = [];

	allLefts(root, lefts);
	allRights(root, rights);

	let nextLeft = () => {
		let cur = lefts.pop();
		if (cur.right !== null) allLefts(cur.right, lefts);
		return cur;
	};

	let nextRight = () => {
		let cur = rights.pop();
		if (cur.left !== null) allRights(cur.left, rights);
		return cur;
	};

	let left = nextLeft();
	let right = nextRight();

	while (left.val < right.val) {
		if (left.val + right.val === k) return true;
		else if (left.val + right.val < k) left = nextLeft();
		else right = nextRight();
	}

	return false;
}

function allLefts(node: TreeNode | null, lefts: TreeNode[]): void {
	while (node !== null) {
		lefts.push(node);
		node = node.left;
	}
}

function allRights(node: TreeNode | null, rights: TreeNode[]): void {
	while (node !== null) {
		rights.push(node);
		node = node.right;
	}
}
