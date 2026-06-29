import tryFunc from './try';

describe('tryFunc', () => {
	it('should return this value', () => {
		expect(tryFunc([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
	});
});
