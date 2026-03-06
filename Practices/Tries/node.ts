export class TrieNode {
	child: Map<string, TrieNode>;
	isEnd: boolean;

	constructor() {
		this.child = new Map();
		this.isEnd = false;
	}
}
