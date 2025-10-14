function rotate1(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        let temp = nums.pop();
        nums.unshift(temp);
    }
};

rotate([1,2,3,4,5,6,7], 3)