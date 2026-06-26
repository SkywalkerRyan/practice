import tryFunc from './try';

describe('tryFunc', () => {
	it('should return the product of all the items', () => {
		expect(tryFunc([1, 2, 2, 5, 3, 5])).toBe(5);
	});
});
