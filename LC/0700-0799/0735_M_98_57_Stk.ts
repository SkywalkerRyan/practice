function asteroidCollision(asteroids: number[]): number[] {
	if (asteroids.length < 2) return asteroids;

	let stk = [];

	for (let i = 0; i < asteroids.length; i++) {
		let element = asteroids[i];
		let last = stk[stk.length - 1];

		if (!stk.length || last < 0 || element > 0) stk.push(element);
		else if (-element === last) {
			stk.pop();
		} else if (-element > last) {
			stk.pop();
			i--;
		}
	}

	return stk;
}
// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));
// console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([3, 5, -6, 2, -1, 4]));
