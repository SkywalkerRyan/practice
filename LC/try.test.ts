import { tryFunc } from './try';

describe.skip('tryFunc', () => {
	it('should return the product of all the items', () => {
		expect(
			tryFunc([
				[1, 2],
				[3, 4],
			])
		).toBe(24);
	});
});
