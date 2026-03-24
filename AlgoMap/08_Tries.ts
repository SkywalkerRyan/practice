// 0208
export class Trie {
	child: Map<string, Trie>;
	cntEnd: number;
	cntNext: number;

	constructor() {
		this.child = new Map();
		this.cntEnd = 0;
		this.cntNext = 0;
	}

	insert(word: string): void {
		let cur: Trie = this;

		for (const char of word) {
			if (!cur.child.has(char)) cur.child.set(char, new Trie());

			cur.cntNext += 1;
			cur = cur.child.get(char)!;
		}
		cur.cntEnd += 1;
	}

	search(word: string): boolean {
		let cur: Trie = this;

		for (const char of word) {
			if (!cur.child.has(char)) return false;

			cur = cur.child.get(char)!;
		}
		return cur.cntEnd > 0;
	}

	startsWith(prefix: string): boolean {
		let cur: Trie = this;

		for (const char of prefix) {
			if (!cur.child.has(char)) return false;

			cur = cur.child.get(char)!;
		}
		return true;
	}

	countWordsEqualTo(word: string): number {
		let cur: Trie = this;

		for (const char of word) {
			if (!cur.child.has(char)) return 0;

			cur = cur.child.get(char)!;
		}
		return cur.cntEnd;
	}

	countWordsStartingWith(prefix: string): number {
		let cur: Trie = this;

		for (const char of prefix) {
			if (!cur.child.has(char)) return 0;

			cur = cur.child.get(char)!;
		}
		return cur.cntNext;
	}

	erase(word: string): void {
		let cur: Trie = this;

		for (const char of word) {
			if (!cur.child.has(char)) return;

			cur.cntNext -= 1;
			cur = cur.child.get(char)!;
		}
		cur.cntEnd -= 1;
	}
}
