// Reverse
// function selectionSort( arr )
// {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) 
//     {
//         let maxIndex = 0;

//         for(let j = 1; j < n - i ; j++)
//         {
//             if( arr[j] > arr[maxIndex] )
//                 maxIndex = j;
//         }

//         if(maxIndex === n - i - 1) continue;

//         let temp = arr[n - i - 1]
//         arr[n - i - 1] = arr[maxIndex];
//         arr[maxIndex] = temp;
//     }

//     return arr;
// }

// Normal
function selectionSort(arr)
{
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) 
        {
            if(arr[j] < arr[minIndex] )
                minIndex = j
        }

        if( minIndex === i ) continue;
        
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// console.log( selectionSort([13,46,24,52,20,9]) );
console.log( selectionSort([5,4,3,2,1]) );