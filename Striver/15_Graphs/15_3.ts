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

// Striver 15.3.2
function topoSortBFS(v: number, adjMat: number[][]): number[] {
	let indegree: number[] = new Array(v).fill(0);
	let queue: number[] = [];
	let stack: number[] = [];

	for (let i = 0; i < v; i++) {
		for (const neighbor of adjMat[i]) {
			indegree[neighbor]++;
		}
	}
	for (let i = 0; i < v; i++) if (indegree[i] === 0) queue.push(i);

	while (queue.length) {
		const cur: number = queue.shift()!;
		for (const neighbor of adjMat[cur]) {
			indegree[neighbor]--;
			if (indegree[neighbor] === 0) queue.push(neighbor);
		}
		stack.push(cur);
	}

	return stack;
}

// LC 0207
function canFinish(numCourses: number, prerequisites: number[][]): boolean {}
