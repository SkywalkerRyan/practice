import tryFunc from './try';

describe('tryFunc', () => {
	it('should return this value', () => {
		expect(tryFunc([-1, 3, 2, 0])).toBe(true);
	});
});
