function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
	for (let i = m; i < nums1.length; i++) {
		nums1[i] = nums2[i - m];
	}
	nums1.sort((a, b) => a - b);
	console.log(nums1);
}

let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;
// let nums1 = [1],
// 	m = 1,
// 	nums2 = [],
// 	n = 0;
console.log(mergeSortedArray(nums1, m, nums2, n));
