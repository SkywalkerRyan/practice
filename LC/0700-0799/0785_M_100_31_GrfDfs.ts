// Striver 15.2.13
// O(v + e), O(v)
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
