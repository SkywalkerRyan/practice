/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) 
{
    if( n <= 1 ) return n;

    let a = 1, b = 2, next;
    
    for( let i = 3; i <= n; i++ ) 
    {
        next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// console.log( climbStairs(1) );
// console.log( climbStairs(2) );
console.log( climbStairs(3) );
// console.log( climbStairs(4) );
// console.log( climbStairs(45) );