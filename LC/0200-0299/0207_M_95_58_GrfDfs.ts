// Striver 15.2.5
// O(numCourses + prereq length), O(adjacency list + visited, instack)
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
