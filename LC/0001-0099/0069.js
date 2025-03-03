/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function( x )
{
    let sqrt = 1;

    while( true )
    {
        if( sqrt * sqrt == x ) return sqrt;
        if( sqrt * sqrt > x ) return sqrt - 1;
        
        sqrt++;
    }
};

// console.log( mySqrt( 4 ) );
console.log( mySqrt( 8 ) );