import { Trie } from './08_Tries';

describe.skip('Trie insert search', () => {
	let trie = new Trie();

	it('returns false for an empty map', () => {
		expect(trie.search('app')).toBe(false);
	});

	it('returns true for an inserted word', () => {
		trie.insert('apple');
		expect(trie.search('apple')).toBe(true);
	});
	it('returns false for an word not inserted', () => {
		expect(trie.search('app')).toBe(false);
	});

	it('returns true for an word inserted again', () => {
		trie.insert('apple');
		expect(trie.search('apple')).toBe(true);
	});

	it('returns false when searching with an empty string', () => {
		expect(trie.search('')).toBe(false);
	});

	it('returns true for an inserted word that has more to it', () => {
		trie.insert('app');
		expect(trie.search('app')).toBe(true);
	});
});

describe.skip('Trie insert startsWith', () => {
	let trie = new Trie();
	trie.insert('apple');

	it('returns true for an inserted word', () => {
		expect(trie.startsWith('app')).toBe(true);
	});
	it('returns false for an inserted word', () => {
		expect(trie.startsWith('bpp')).toBe(false);
	});

	it('returns true when searching with an empty string', () => {
		expect(trie.startsWith('')).toBe(true);
	});
});

describe('Trie insert countWordsEqualTo', () => {
	let trie: Trie;
	beforeEach(() => {
		trie = new Trie();
	});

	it('returns 0 for an word not inserted', () => {
		expect(trie.countWordsEqualTo('apple')).toBe(0);
	});

	it('returns 1 for an inserted word', () => {
		trie.insert('apple');
		expect(trie.countWordsEqualTo('apple')).toBe(1);
	});

	it('returns 2 for an word inserted again', () => {
		trie.insert('apple');
		trie.insert('apple');
		expect(trie.countWordsEqualTo('apple')).toBe(2);
	});

	it('returns 0 for an empty string with an inserted word', () => {
		trie.insert('apple');
		expect(trie.countWordsEqualTo('')).toBe(0);
	});
});
