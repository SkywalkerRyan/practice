// LC 547
function findCircleNumDFS(isConnected: number[][]): number {
	let n = isConnected.length;
	let visited: boolean[] = new Array(n).fill(false);

	let province = 0;

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			visited[i] = true;
			dfs(i);
			province++;
		}
	}

	function dfs(cur: number): void {
		for (let i = 0; i < n; i++) {
			if (isConnected[cur][i] === 1 && !visited[i]) {
				visited[i] = true;
				dfs(i);
			}
		}
	}

	return province;
}

// LC 547
export function findCircleNumBFS(isConnected: number[][]): number {
	let n: number = isConnected.length;
	let visited: boolean[] = new Array(n).fill(false);

	let province = 0;

	for (let j = 0; j < n; j++) {
		if (!visited[j]) {
			visited[j] = true;
			let queue: number[] = [j];
			province++;

			while (queue.length) {
				let cur = queue.shift();

				for (let i = 0; i < n; i++) {
					if (!visited[i] && isConnected[cur][i] === 1) {
						visited[i] = true;
						queue.push(i);
					}
				}
			}
		}
	}

	return province;
}
