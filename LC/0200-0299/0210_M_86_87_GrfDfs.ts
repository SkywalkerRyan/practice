// Striver 15.2.14
// O(v + e), O(v + e)
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
