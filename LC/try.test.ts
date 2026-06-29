import tryFunc from './try';

describe('tryFunc', () => {
	it('should return this value', () => {
		expect(tryFunc(['a', 'abc', 'bc', 'd'], 'abc')).toEqual(3);
	});
});
