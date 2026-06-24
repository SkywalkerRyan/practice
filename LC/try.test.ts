import { nearestValidPoint } from './try';

describe('nearestValidPoint', () => {
	it('should return the product of all the items', () => {
		expect(
			nearestValidPoint(3, 4, [
				[1, 2],
				[3, 1],
				[2, 4],
				[2, 3],
				[4, 4],
			])
		).toBe(2);
	});
});
