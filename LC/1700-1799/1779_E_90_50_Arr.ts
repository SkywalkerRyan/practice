// LC 1779
// O(n), O(1)
export function nearestValidPoint(x: number, y: number, points: number[][]): number {
	let lowest = Infinity;
	let lid = -1;
	for (let i = 0; i < points.length; i++) {
		if (points[i][0] === x || points[i][1] === y) {
			const curDis = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
			if (curDis < lowest) {
				lowest = curDis;
				lid = i;
			}
		}
	}

	return lid;
}
