function recursion(i, n)
{
    if(i > n) return;

    recursion(i + 1, n)
    
    console.log(i);
}
// recursion(1, 5)

function sum(n)
{
    if(n <= 0) return 0;

    return (n + sum(n - 1));
}
// console.log(sum(6));

function factorial(n)
{
    if(n <= 0) return 1;

    return (n * factorial(n - 1));
}
// console.log(factorial(3))

// function revArray( arr )
// {
//     let newArr = [];

//     for(let i = arr.length; i > 0; i--)
//         newArr.push(arr[i - 1]);

//     return newArr;
// }

// function revArray( arr )
// {
//     let item1 = 0;
//     let item2 = arr.length - 1;

//     while(item1 < item2)
//     {
//         let temp = arr[item1];

//         arr[item1] = arr[item2];
//         arr[item2] = temp;

//         item1++;
//         item2--;
//     }

//     return arr;
// }

function revArray(arr)
{
    temp = arr[0];
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp;

    let newArr = arr.remove[0];
    
    return revArray(newArr);
}
console.log(revArray([1,2,3,4,5]));