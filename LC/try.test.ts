import tryFunc from './try';

describe('tryFunc', () => {
	it('should return this value', () => {
		expect(
			tryFunc(
				[
					[1, 2, 5],
					[2, 1, 7],
					[3, 1, 9],
				],
				2
			)
		).toEqual([2, 1]);
	});
});
