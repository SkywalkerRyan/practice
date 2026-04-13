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

// LC 547
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

// Striver 15.2.2
export function findProvincesDFS(v: number, edges: number[][]): number {
	let adjMat: number[][] = Array.from({ length: v }, () => []);

	for (const [x, y] of edges) {
		adjMat[x].push(y);
		adjMat[y].push(x);
	}

	let visited: boolean[] = new Array(v).fill(false);
	let province = 0;

	for (let i = 0; i < v; i++) {
		if (!visited[i]) {
			DFS(i);
			province++;
		}
	}

	function DFS(cur: number) {
		visited[cur] = true;

		for (let j = 0; j < adjMat[cur].length; j++) if (!visited[adjMat[cur][j]]) DFS(adjMat[cur][j]);
	}

	return province;
}

// Striver 15.2.2
export function findProvincesBFS(v: number, edges: number[][]): number {
	let adjMat: number[][] = Array.from({ length: v }, () => []);

	for (const [x, y] of edges) {
		adjMat[x].push(y);
		adjMat[y].push(x);
	}

	let visited: boolean[] = new Array(v).fill(false);
	let province = 0;
	let queue: number[] = [];

	for (let i = 0; i < v; i++) {
		if (!visited[i]) {
			visited[i] = true;
			province++;
			queue.push(i);
		}

		BFS();
	}

	function BFS() {
		while (queue.length) {
			let cur = queue.shift()!;

			for (let i = 0; i < adjMat[cur].length; i++) {
				if (!visited[adjMat[cur][i]]) {
					visited[adjMat[cur][i]] = true;
					queue.push(adjMat[cur][i]);
				}
			}
		}
	}

	return province;
}

// LC 994
function orangesRotting(grid: number[][]): number {
	let m: number = grid.length;
	let n: number = grid[0].length;

	let fresh: number = 0;
	let queue: number[][] = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) fresh++;
			if (grid[i][j] === 2) queue.push([i, j]);
		}
	}

	if (fresh === 0) return 0;

	let cycle: number = 0;

	while (queue.length) {
		let len = queue.length;
		let infected = 0;

		for (let l = 0; l < len; l++) {
			let cur = queue.shift()!;
			infected += rotAdjacent(cur[0], cur[1]);
		}
		if (infected > 0) cycle++;
	}

	function rotAdjacent(i: number, j: number): number {
		let count = 0;
		if (i > 0 && grid[i - 1][j] === 1) {
			grid[i - 1][j] = 2;
			queue.push([i - 1, j]);
			fresh--;
			count++;
		}
		if (i < m - 1 && grid[i + 1][j] === 1) {
			grid[i + 1][j] = 2;
			queue.push([i + 1, j]);
			fresh--;
			count++;
		}
		if (j > 0 && grid[i][j - 1] === 1) {
			grid[i][j - 1] = 2;
			queue.push([i, j - 1]);
			fresh--;
			count++;
		}
		if (j < n - 1 && grid[i][j + 1] === 1) {
			grid[i][j + 1] = 2;
			queue.push([i, j + 1]);
			fresh--;
			count++;
		}
		return count;
	}

	return fresh > 0 ? -1 : cycle;
}

// LC 0733
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
	let initColor = image[sr][sc];
	if (initColor === color) return image;

	let m: number = image.length;
	let n: number = image[0].length;

	let queue: number[][] = [[sr, sc]];
	image[sr][sc] = color;

	while (queue.length) {
		let cur = queue.shift()!;
		rotAdjacent(cur[0], cur[1]);
	}

	function rotAdjacent(i: number, j: number): void {
		if (i > 0 && image[i - 1][j] === initColor) {
			image[i - 1][j] = color;
			queue.push([i - 1, j]);
		}
		if (i < m - 1 && image[i + 1][j] === initColor) {
			image[i + 1][j] = color;
			queue.push([i + 1, j]);
		}
		if (j > 0 && image[i][j - 1] === initColor) {
			image[i][j - 1] = color;
			queue.push([i, j - 1]);
		}
		if (j < n - 1 && image[i][j + 1] === initColor) {
			image[i][j + 1] = color;
			queue.push([i, j + 1]);
		}
	}

	return image;
}

// LC 207
function canFinishBfs(numCourses: number, prerequisites: number[][]): boolean {
	let adjMat: number[][] = Array.from({ length: numCourses }, () => []);
	let indegree: number[] = new Array(numCourses).fill(0);

	for (const [a, b] of prerequisites) {
		adjMat[b].push(a);
		indegree[a]++;
	}

	let queue: number[] = [];
	let count: number = 0;

	for (let i = 0; i < numCourses; i++) {
		if (indegree[i] === 0) queue.push(i);
	}

	while (queue.length) {
		let cur: number = queue.shift()!;
		count++;

		for (const neighbor of adjMat[cur]) {
			indegree[neighbor]--;
			if (indegree[neighbor] === 0) queue.push(neighbor);
		}
	}

	return numCourses === count;
}

console.log(canFinishBfs(2, [[1, 0]]));
