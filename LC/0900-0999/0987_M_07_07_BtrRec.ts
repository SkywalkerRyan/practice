// 0987
function verticalTraversal(root: TreeNode | null): number[][] {
	let map = new Map();

	traverseVertical(root, 0, 0, map);

	console.log(map);

	let sorted = [...map.keys()].sort((a, b) => a - b);
	return sorted.map((col) =>
		map
			.get(col)
			.sort((a, b) => a[0] - b[0] || a[1] - b[1])
			.map((pair) => pair[1])
	);
}

function traverseVertical(node: TreeNode | null, row: number, col: number, map: Map<number, [number, number][]>): void {
	if (node === null) return;

	if (!map.has(col)) map.set(col, []);
	map.get(col).push([row, node.val]);

	traverseVertical(node.left, row + 1, col - 1, map);
	traverseVertical(node.right, row + 1, col + 1, map);
}
