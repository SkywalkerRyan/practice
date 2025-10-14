function moveZeros(nums: number[]): number[] {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            const temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp

            i++
        }
    }

    return nums
}

console.log(moveZeros([1, 0, 2, 3, 0, 4, 0, 1]))
// console.log(moveZeros([0, 1, 0, 3, 12]))
// console.log(moveZeros([1, 2, 0, 1, 0, 4, 0]))
