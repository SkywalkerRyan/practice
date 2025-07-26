function square(x) {
	return x * x;
}

function memoize(fn) {
	let cache = {};

	console.log(cache);
	return function (...args) {
		if (cache[args.toString() in cache]) return cache[args.toString()];
		else {
			const result = fn(...args);
			cache[args.toString()] = result;
			return result;
		}
	};
}

console.time("1 : ");
let memoized = memoize(square);
console.log(memoized(2));
console.timeEnd("1 : ");
console.time("2 : ");
console.log(memoized(2));
console.timeEnd("2 : ");
