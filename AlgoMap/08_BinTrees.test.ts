import { Trie } from './08_BinTrees';

describe('Trie insert search', () => {
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

describe('Trie insert startsWith', () => {
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
