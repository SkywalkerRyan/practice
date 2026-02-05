// Striver 14.2.10
class BSTIterator {
	stk: TreeNode[];

	constructor(root: TreeNode | null) {
		this.stk = [];

		this.allLefts(root);
	}

	allLefts(root: TreeNode | null): void {
		while (root != null) {
			this.stk.push(root);
			root = root.left;
		}
	}

	next(): number {
		let cur = this.stk.pop();

		if (cur.right !== null) this.allLefts(cur.right);

		return cur.val;
	}

	hasNext(): boolean {
		return this.stk.length > 0;
	}
}
