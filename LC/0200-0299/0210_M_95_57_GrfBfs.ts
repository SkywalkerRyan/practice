// Striver 15.2.14
// O(v + e), O(v + e)
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
