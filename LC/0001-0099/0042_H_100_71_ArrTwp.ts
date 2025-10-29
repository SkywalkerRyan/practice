function trap(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let leftHigh = height[left];
	let rightHigh = height[right];

	let count = 0;

	while (left < right) {
		if (leftHigh < rightHigh) {
			left++;
			leftHigh = Math.max(leftHigh, height[left]);
			count += leftHigh - height[left];
		} else {
			right--;
			rightHigh = Math.max(rightHigh, height[right]);
			count += rightHigh - height[right];
		}
	}

	return count;
}
