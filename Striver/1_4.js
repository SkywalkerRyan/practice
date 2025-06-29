// function countDigits(n)
// {
//     // let count = 0;
//     // let num = n;

//     // while(num > 0)
//     // {
//     //     num = Math.floor(num / 10);
//     //     count++;
//     // }

//     // return count;

//     return Math.floor( Math.log10(7723985723089) + 1);
// }

// console.log(countDigits(7723985723089))

function reverseNumber(n)
{
    let num = n;
    let rev = 0;

    while(num != 0)
    {
        rev = 10 * rev + num % 10;
        num = Math.floor(num / 10);
    }

    return rev;

}

// console.log(reverseNumber(-321))

function checkPalindrome(n) {
    if (n === reverseNumber(n))
        return true;

    return false;
}

// console.log(checkPalindrome(98765678));

// function GCD(n1, n2)
// {
//     let d1 = [];

//     for(let i = 1; i <= n1; i++)
//     {
//         if( n1 % i === 0)
//             d1.push(i);
//     }

//     for( let j = d1[d1.length - 1]; j > 0; j-- )
//     {
//         if(n2 % d1[j] === 0)
//             return d1[j];
//     }
// }

// function GCD(n1, n2)
// {
//     for(let i = Math.min(n1, n2); i >= 1; i--)
//     {
//         if( n1 % i === 0 && n2 % i === 0 )
//             return i;
//     }
// }

function GCD(n1, n2)
{
    if(n1 === 0) return n2;
    if(n2 === 0) return n1;

    const max = Math.max(n1, n2)
    const min = Math.min(n1, n2)

    return GCD(min, max - min)
}

// console.log( GCD(10, 15) )
console.log( GCD(9, 12) )