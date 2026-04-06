import { findCircleNumBFS } from "./15_2";

describe("LC 547 - Number of Provinces (BFS)", () => {
	test("two separate components", () => {
		const isConnected = [
			[1, 1, 0],
			[1, 1, 0],
			[0, 0, 1],
		];
		expect(findCircleNumBFS(isConnected)).toBe(2);
	});

	test("all nodes connected", () => {
		const isConnected = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1],
		];
		expect(findCircleNumBFS(isConnected)).toBe(1);
	});

	test("all nodes disconnected", () => {
		const isConnected = [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1],
		];
		expect(findCircleNumBFS(isConnected)).toBe(3);
	});

	test("single node", () => {
		const isConnected = [[1]];
		expect(findCircleNumBFS(isConnected)).toBe(1);
	});
});
