// Striver 15.2.1
// O(n^3), O(n)
function findCircleNum(isConnected: number[][]): number {
	let n: number = isConnected.length;
	let count: number = n;
	let parent: number[] = Array.from({ length: count }, (_, i) => i);

	function findParent(child: number[], x: number): number {
		if (child[x] === x) return x;

		return findParent(child, child[x]);
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (isConnected[i][j] === 1) {
				let rootI = findParent(parent, i);
				let rootJ = findParent(parent, j);
				if (rootI !== rootJ) {
					parent[rootI] = rootJ;
					count--;
				}
			}
		}
	}

	return count;
}
