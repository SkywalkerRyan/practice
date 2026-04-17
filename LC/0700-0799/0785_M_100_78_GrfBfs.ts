// Striver 15.2.13
// O(v + e), O(v)
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
