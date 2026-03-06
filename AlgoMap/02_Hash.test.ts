import {
	numJewelsInStones,
	containsDuplicate1,
	canConstruct,
	maxNumberOfBalloons,
	isValidSudoku,
	groupAnagrams,
} from './02_Hash';

describe.skip('numJewelsInStones', () => {
	it('tests that jewels exist in the string', () => {
		expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
	});

	it('tests that jewels do not exist in the string', () => {
		expect(numJewelsInStones('z', 'aAAbbbb')).toBe(0);
	});
});

describe.skip('containsDuplicate1', () => {
	it('tests that a number is duplicate', () => {
		expect(containsDuplicate1([1, 2, 3, 1])).toBeTruthy();
	});
});
