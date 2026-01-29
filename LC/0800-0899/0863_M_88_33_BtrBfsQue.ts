// Striver 13.3.5
function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
	if (root === null) return [];

	let parents = new Map<TreeNode, TreeNode | null>();

	setParents(root, parents);

	let queue = [target];
	let visited = new Set([target]);
	let res = [];
	let distance = 0;

	while (queue.length > 0 && distance < k) {
		let len = queue.length;

		for (let i = 0; i < len; i++) {
			let cur = queue.shift();

			if (cur.left && !visited.has(cur.left)) {
				visited.add(cur.left);
				queue.push(cur.left);
			}
			if (cur.right && !visited.has(cur.right)) {
				visited.add(cur.right);
				queue.push(cur.right);
			}
			let par = parents.has(cur) ? parents.get(cur) : null;
			if (par && !visited.has(par)) {
				visited.add(par);
				queue.push(par);
			}
		}
		distance++;
	}

	for (let j = 0; j < queue.length; j++) {
		res.push(queue[j].val);
	}

	return res;
}

function setParents(root: TreeNode | null, parents: Map<TreeNode, TreeNode | null>): void {
	let queue = [root];
	parents.set(root, null);

	while (queue.length > 0) {
		let cur = queue.shift();

		if (cur.left) {
			parents.set(cur.left, cur);
			queue.push(cur.left);
		}
		if (cur.right) {
			parents.set(cur.right, cur);
			queue.push(cur.right);
		}
	}
}
