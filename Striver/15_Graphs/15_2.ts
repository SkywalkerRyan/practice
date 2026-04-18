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

// LC 0207
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

// LC 0207
function canFinishDfs(numCourses: number, prerequisites: number[][]): boolean {
	let adjMat: number[][] = Array.from({ length: numCourses }, () => []);
	let visited: boolean[] = new Array(numCourses).fill(false);
	let instack: boolean[] = new Array(numCourses).fill(false);

	for (const [a, b] of prerequisites) {
		adjMat[b].push(a);
	}

	for (let i = 0; i < numCourses; i++) {
		if (!visited[i] && foundCycle(i)) return false;
	}

	function foundCycle(course: number): boolean {
		instack[course] = true;

		for (let i = 0; i < adjMat[course].length; i++) {
			const neighbor: number = adjMat[course][i];
			if (instack[neighbor]) return true;
			if (!visited[neighbor] && foundCycle(neighbor)) return true;
		}

		instack[course] = false;
		visited[course] = true;
		return false;
	}

	return true;
}

// LC 542
function updateMatrix(mat: number[][]): number[][] {
	const m: number = mat.length;
	const n: number = mat[0].length;

	const res: number[][] = Array.from({ length: m }, () => new Array(n).fill(Infinity));
	const queue: number[][] = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (mat[i][j] === 0) {
				res[i][j] = 0;
				queue.push([i, j]);
			}
		}
	}

	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (queue.length) {
		const [r, c] = queue.shift()!;

		for (const [dr, dc] of dirs) {
			const nr: number = r + dr;
			const nc: number = c + dc;

			if (nr >= 0 && nr < m && nc >= 0 && nc < n && res[nr][nc] === Infinity) {
				res[nr][nc] = res[r][c] + 1;
				queue.push([nr, nc]);
			}
		}
	}

	return res;
}

// LC 130
function surroundedRegion(board: string[][]): void {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function adjacentZeroes(r: number, c: number): void {
		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;

			if (nr >= 0 && nr < m && nc >= 0 && nc < n && !safe[nr][nc] && board[nr][nc] === 'O') {
				safe[nr][nc] = true;
				adjacentZeroes(nr, nc);
			}
		}
	}

	let m: number = board.length;
	let n: number = board[0].length;

	let safe: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
				if (board[i][j] === 'O') {
					safe[i][j] = true;
					adjacentZeroes(i, j);
				}
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (!safe[i][j]) board[i][j] = 'X';
		}
	}
}

// LC 1020
function numEnclaves(grid: number[][]): number {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function markSafe(r: number, c: number): void {
		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;

			if (nr > 0 && nr < m - 1 && nc > 0 && nc < n - 1) {
				if (grid[nr][nc] === 1) {
					grid[nr][nc] = 0;
					markSafe(nr, nc);
				}
			}
		}
	}

	let m: number = grid.length;
	let n: number = grid[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
				if (grid[i][j] === 1) {
					grid[i][j] = 0;
					markSafe(i, j);
				}
			}
		}
	}

	let count: number = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) count++;
		}
	}

	return count;
}

// LC 200 DFS
function numIslandsDFS(grid: string[][]): number {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function markVisited(r: number, c: number): void {
		for (const [dr, dc] of dirs) {
			const nr = r + dr;
			const nc = c + dc;

			if (nr >= 0 && nr <= m - 1 && nc >= 0 && nc <= n - 1) {
				if (grid[nr][nc] === '1') {
					grid[nr][nc] = '0';
					markVisited(nr, nc);
				}
			}
		}
	}

	let m: number = grid.length;
	let n: number = grid[0].length;

	let count: number = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				count++;
				grid[i][j] = '0';
				markVisited(i, j);
			}
		}
	}

	return count;
}

// LC 200 BFS
function numIslandsBFS(grid: string[][]): number {
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	function markVisited(r: number, c: number): void {
		let queue = [[r, c]];

		while (queue.length) {
			const [qr, qc] = queue.shift()!;
			for (const [dr, dc] of dirs) {
				const nr = qr + dr;
				const nc = qc + dc;

				if (nr >= 0 && nr <= m - 1 && nc >= 0 && nc <= n - 1) {
					if (grid[nr][nc] === '1') {
						grid[nr][nc] = '0';
						queue.push([nr, nc]);
					}
				}
			}
		}
	}

	let m: number = grid.length;
	let n: number = grid[0].length;

	let count: number = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				count++;
				grid[i][j] = '0';
				markVisited(i, j);
			}
		}
	}

	return count;
}

// LC 785
function isBipartiteDFS(graph: number[][]): boolean {
	let m: number = graph.length;

	let colors: number[] = new Array(m).fill(-1);

	function dfs(x: number, curColor: number): boolean {
		if (colors[x] !== -1) return colors[x] === curColor;
		colors[x] = curColor;
		for (let i = 0; i < graph[x].length; i++) {
			if (!dfs(graph[x][i], 1 - curColor)) return false;
		}
		return true;
	}

	for (let i = 0; i < graph.length; i++) {
		if (colors[i] === -1 && !dfs(i, 0)) return false;
	}
	return true;
}

// LC 785
function isBipartiteBFS(graph: number[][]): boolean {
	let m: number = graph.length;
	let colors: number[] = new Array(m).fill(-1);

	for (let i = 0; i < graph.length; i++) {
		if (colors[i] !== -1) continue;

		colors[i] = 0;
		let queue: number[] = [i];

		while (queue.length) {
			const cur: number = queue.shift()!;

			for (const neighbor of graph[cur]) {
				if (colors[neighbor] === colors[cur]) return false;

				if (colors[neighbor] === -1) {
					colors[neighbor] = 1 - colors[cur];
					queue.push(neighbor);
				}
			}
		}
	}
	return true;
}

// LC 0210
function findOrderBFS(numCourses: number, prerequisites: number[][]): number[] {
	let adjMat: number[][] = Array.from({ length: numCourses }, () => []);
	let indegree: number[] = new Array(numCourses).fill(0);

	for (const [x, y] of prerequisites) {
		adjMat[y].push(x);
		indegree[x]++;
	}

	let queue: number[] = [];
	let res: number[] = [];

	for (let i = 0; i < numCourses; i++) {
		if (indegree[i] === 0) queue.push(i);
	}

	while (queue.length) {
		let cur: number = queue.shift()!;
		res.push(cur);

		for (const neighbor of adjMat[cur]) {
			indegree[neighbor]--;
			if (indegree[neighbor] === 0) queue.push(neighbor);
		}
	}

	return res.length === numCourses ? res : [];
}

// LC 0210
function findOrderDFS(numCourses: number, prerequisites: number[][]): number[] {
	let adjMat: number[][] = Array.from({ length: numCourses }, () => []);
	let visited: boolean[] = new Array(numCourses).fill(false);
	let instack: boolean[] = new Array(numCourses).fill(false);
	let res: number[] = [];

	for (const [x, y] of prerequisites) {
		adjMat[y].push(x);
	}

	function dfs(course: number): boolean {
		instack[course] = true;

		for (const neighbor of adjMat[course]) {
			if (instack[neighbor]) return false;
			if (!visited[neighbor] && !dfs(neighbor)) return false;
		}
		res.push(course);
		instack[course] = false;
		visited[course] = true;

		return true;
	}

	for (let i = 0; i < numCourses; i++) {
		if (!visited[i] && !dfs(i)) return [];
	}

	return res.length === numCourses ? res.reverse() : [];
}
for (let i = 0; i < m; i++) {
	for (let j = 0; j < n; j++) {
		//
	}
}
