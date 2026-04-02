// LC 547
function findCircleNumTrav(isConnected: number[][]): number {
	let n = isConnected.length;
	let visited: boolean[] = new Array(n).fill(false);

	let province = 0;
	
	for (let i = 0; i < n; i++) {
		if(!visited[i]){
			visited[i] = true;
			dfs(i);
			province++;
		}
	}
	
	function dfs(cur: number): void {
		for (let i = 0; i < n; i++) {
			if(isConnected[cur][i] === 1 && !visited[i]){
				visited[i] = true;
				dfs(i);
			}
		}
	}

	return province;
}
