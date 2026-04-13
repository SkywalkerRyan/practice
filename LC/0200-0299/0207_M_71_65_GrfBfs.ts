// Striver 15.2.5
// O(numCourses + prereq), O(adjList + indegree Array)
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
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
