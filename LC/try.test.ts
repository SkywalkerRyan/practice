import { find132pattern } from './try';

describe('find132pattern', () => {
	it('should return the product of all the items', () => {
		expect(find132pattern([1, 0, 1, -4, -3])).toBe(false);
	});
});
