function check(nums: number[]): boolean {
    let count: number = 0;
    let len: number = nums.length;
    
    for (let i = 0; i < len; i++) {
        if( nums[i] > nums[ (i + 1)% len] )
            count++;
    }
    
    return (count < 2);
};

console.log(check([3,4,5,1,2]));
console.log(check([2,1,3,4]));
console.log(check([1,2,3]));
