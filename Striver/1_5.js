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

function revArray( arr )
{
    //
}
console.log(arr);