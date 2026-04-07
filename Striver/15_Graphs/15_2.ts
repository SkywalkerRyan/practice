// LC 547
function findCircleNumDFS(isConnected: number[][]): number {
	let n = isConnected.length;
	let visited: boolean[] = new Array(n).fill(false);

	let province = 0;

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			visited[i] = true;
			dfs(i);
			province++;
		}
	}

	function dfs(cur: number): void {
		for (let i = 0; i < n; i++) {
			if (isConnected[cur][i] === 1 && !visited[i]) {
				visited[i] = true;
				dfs(i);
			}
		}
	}

	return province;
}

// LC 547
export function findCircleNumBFS(isConnected: number[][]): number {
	let n: number = isConnected.length;
	let visited: boolean[] = new Array(n).fill(false);

	let province = 0;

	for (let j = 0; j < n; j++) {
		if (!visited[j]) {
			visited[j] = true;
			let queue: number[] = [j];
			province++;

			while (queue.length) {
				let cur = queue.shift();

				for (let i = 0; i < n; i++) {
					if (!visited[i] && isConnected[cur][i] === 1) {
						visited[i] = true;
						queue.push(i);
					}
				}
			}
		}
	}

	return province;
}

export function findCircleNumUnionFind(isConnected: number[][]): number {
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
