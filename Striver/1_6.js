// function countFrequency(n)  // using for loop
// {
//     let obj = {};
//     for(let i = 0; i < n.length; i++)
//     {
//         if( n[i] in obj )
//             obj[n[i]]++
//         else
//             obj[n[i]] = 1
//     }

//     return obj;
// }

function countFrequency(n)   // using map
{
    const freqMap = new Map();

    for(_n of n)
    {
        freqMap.set( _n, ( freqMap.get(_n) || 0 ) + 1 );
    }

    const result = [];
    for (let [key, value] of freqMap.entries()) {
        result.push([key, value]);
    }

    return result;
}

// console.log(countFrequency([1, 2, 2, 1, 3]))
// console.log(countFrequency([10,5,10,15,10,5]))