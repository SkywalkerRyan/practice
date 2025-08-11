//
function insertionSort(arr)
{
    const n = arr.length;

    for (let i = 0; i < n; i++) 
    {
        let j = i;

        while(j > 0 && arr[j] < arr[j-1])
        {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }

    return arr;
}

console.log( insertionSort([13,46,24,52,20,9]) );
// console.log( insertionSort([5,4,3,2,1]) );
// console.log( insertionSort([1, 2, 3, 4, 5, 6]) );