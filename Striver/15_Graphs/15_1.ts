// LC 323
function connectedComponents(v: number, edges: number[][]): number {
	let adjMat: number[][] = Array.from({ length: v }, () => []);

	for (const [a, b] of edges) {
		adjMat[a].push(b);
		adjMat[b].push(a);
	}

	let visited: boolean[] = new Array(v).fill(false);
	let cnt: number = 0;

	for (let i = 0; i < v; i++) {
		if (!visited[i]) {
			bfs(i, adjMat, visited);
			cnt++;
		}
	}

	return cnt;
}

function bfs(start: number, adj: number[][], visited: boolean[]): void {
	const queue: number[] = [start];
	visited[start] = true;

	while (queue.length) {
		const cur = queue.shift()!;
		for (const neighbor of adj[cur]) {
			if (!visited[neighbor]) {
				visited[neighbor] = true;
				queue.push(neighbor);
			}
		}
	}
}

console.log(
	connectedComponents(4, [
		[0, 1],
		[1, 2],
	])
);

console.log(
	connectedComponents(7, [
		[0, 1],
		[1, 2],
		[2, 3],
		[4, 5],
	])
);

// Striver 15.1.5
function dfsTraversal(v: number, edges: number[][]): number[] {
	let adjMat = Array.from({ length: v }, () => []);
	for (const [a, b] of edges) {
		adjMat[a].push(b);
		adjMat[b].push(a);
	}

	let visited: boolean[] = new Array(v).fill(false);
	let ans = [];

	dfs(0, ans, adjMat, visited);

	return ans;
}

function dfs(cur: number, ans: number[], adjMat: number[][], visited: boolean[]): void {
	visited[cur] = true;
	ans.push(cur);
	for (let i = 0; i < adjMat[cur].length; i++) {
		if (!visited[adjMat[cur][i]]) dfs(adjMat[cur][i], ans, adjMat, visited);
	}
}
