function rotate(nums: number[], k: number): void {
    const len = nums.length
    // const point = Math.abs(len - k) //(k % len) - 1
    const point = k % len

    console.log(point)

    swap(nums, 0, len - 1)
    swap(nums, 0, point - 1)
    swap(nums, point, len - 1)

    // console.log(nums)
}

function swap(nums: number[], head: number, tail: number): number[] {
    console.log('h : ', head)
    console.log('t : ', tail)
    while (head < tail) {
        const temp = nums[head]
        nums[head] = nums[tail]
        nums[tail] = temp
        head++
        tail--
    }

    console.log(nums)

    return nums
}

// rotate([-1, -100, 3, 99], 2)
// rotate([-1], 2)
rotate([1, 2, 3, 4, 5, 6, 7], 3)
// rotate([1, 2], 7)
