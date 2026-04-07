// Striver 15.2.1
// O(n^2), O(n)
function findCircleNum(isConnected: number[][]): number {
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
