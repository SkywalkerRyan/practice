//
function bubbleSort(arr)
{
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) 
    {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) 
        {    
            if(arr[j + 1] > arr[j]) continue;
            else {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if(!swapped) break;
    }

    return arr;
}

// console.log( bubbleSort([13,46,24,52,20,9]) );
// console.log( bubbleSort([5,4,3,2,1]) );
console.log( bubbleSort([1, 2, 3, 4, 5, 6]) );