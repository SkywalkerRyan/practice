// Striver 15.1.4
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
