/**
 * @param {number} num
 * @return {number}
 */
var romanToInt = function( s ) 
{
    let count = 0;

    for( i = s.length; i > 0; i-- )
    {
        if( value ( s[i-1] ) < value ( s[i] ) ) count -= value ( s[i-1] )
        else count += value( s[i-1] );
    }

    return count;
}

const value = symbol =>
{
    switch ( symbol ) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

console.log( romanToInt( "MCMXCIV" ) );