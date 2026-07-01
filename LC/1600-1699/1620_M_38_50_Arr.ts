// LC 1620
// O(g^2 n), O(1)
function bestCoordinate(towers: number[][], radius: number): number[] {
	let highPower = 0;
	let highPoint = [0, 0];

	for (let i = 0; i < 51; i++) {
		for (let j = 0; j < 51; j++) {
			let tempPower = 0;
			for (let k = 0; k < towers.length; k++) {
				tempPower += calcPower(i, j, k);
			}
			if (tempPower > highPower) {
				highPower = tempPower;
				highPoint = [i, j];
			}
		}
	}

	function calcPower(i: number, j: number, t: number) {
		let dist = Math.hypot(i - towers[t][0], j - towers[t][1]);
		return dist <= radius ? Math.floor(towers[t][2] / (1 + dist)) : 0;
	}

	return highPoint;
}
