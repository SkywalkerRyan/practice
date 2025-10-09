function secondLargest(arr:number[]): number[] {
    if (arr.length < 2)
        return [-1, -1];

    let small1: number = 10000;
    let small2: number = 10000;
    let big1: number = arr[0];
    let big2: number = arr[0];

    for (let index = 0; index < arr.length; index++) {
        if( arr[index] < small1 )
            small1 = arr[index];

        if( arr[index] > small1 && arr[index] < small2)
            small2 = arr[index];

        if( arr[index] > big1 )
            big1 = arr[index];

        if( arr[index] < big1 && arr[index] > big2 )
            big2 = arr[index];
    }
    return [small2, big2];
}
// console.log(secondLargest([1,2,4,7,7,5]));
console.log(secondLargest([1]));
