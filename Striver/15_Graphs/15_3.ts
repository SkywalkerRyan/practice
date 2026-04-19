// Striver 15.3.1
function topoSortDFS(v: number, adjMat: number[][]): number[] {
	let visited: boolean[] = new Array(v).fill(false);

	let stack: number[] = [];

	for (let i = 0; i < v; i++) {
		if (!visited[i]) dfs(i);
	}

	function dfs(x: number): void {
		visited[x] = true;
		for (const cur of adjMat[x]) {
			if (!visited[cur]) dfs(cur);
		}
		stack.push(x);
	}

	return stack.reverse();
}

console.log(topoSortDFS(4, [[], [0], [0], [0]]));
// console.log(topoSortDFS(6, [[], [], [3], [1], [0, 1], [0, 2]]));
