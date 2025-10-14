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
// console.log(secondLargest([1]));

function checkSorted(arr:number[]): boolean {
    let ret = true;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            ret = false;
        }
    }
    return ret;
}

// console.log(checkSorted([1,2,3,4,5]));
// console.log(checkSorted([5,4,6,7,8]));

function removeDuplicate( arr: number[] ): number[] {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i-1]) {
            arr.splice(i-1, 1)
            i--;
        }
    }
    
    return arr
}

// console.log(removeDuplicate([1,1,2,2,2,3,3]));
// console.log(removeDuplicate([1,1,1,2,2,3,3,3,3,4,4]));

function leftRotate(arr: number[]): number[] {
    let newArr: number[] = [];
    const len = arr.length;

    for( let i = 0; i < len; i++ ){
        newArr.push(arr[(i + 1) % len])
    }
    
    return newArr;
}

// console.log(leftRotate([1,2,3,4,5]));
console.log(leftRotate([3]));

