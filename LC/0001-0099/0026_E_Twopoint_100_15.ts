function removeDuplicates(nums: number[]): number {
    let i: number, j: number = 1;

    for (i = 1; i < nums.length; i++) {
        if(nums[j - 1] !== nums[i]) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    return j;
};

console.log( removeDuplicates( [1,1,2] ) );
// console.log( removeDuplicates( [0,0,1,1,1,2,2,3,3,4] ) );