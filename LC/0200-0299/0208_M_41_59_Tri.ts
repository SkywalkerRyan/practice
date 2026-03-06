// Striver 17.1.1, AlgoMap 08.14
class Trie {
	child: Map<string, Trie>;
	isEnd: boolean;

	constructor() {
		this.child = new Map();
		this.isEnd = false;
	}

	insert(word: string): void {
		let cur: Trie = this;

		for (const char of word) {
			if (!cur.child.has(char)) {
				cur.child.set(char, new Trie());
			}
			cur = cur.child.get(char)!;
		}
		cur.isEnd = true;
	}

	search(word: string): boolean {
		let cur: Trie = this;

		for (const char of word) {
			if (!cur.child.has(char)) {
				return false;
			}
			cur = cur.child.get(char)!;
		}
		return cur.isEnd;
	}

	startsWith(prefix: string): boolean {
		let cur: Trie = this;

		for (const char of prefix) {
			if (!cur.child.has(char)) {
				return false;
			}
			cur = cur.child.get(char)!;
		}
		return true;
	}
}
