/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function( s, t ) 
{
    if( s.length !== t.length ) return false;

    s = [...s].sort();
    t = [...t].sort();

    for( i = 0; i < s.length; i++ )
    {
        if ( s[ i ] !== t[ i ] ) return false;
    }

    return true;
};

console.log( isAnagram( "aacc", "ccaa" ) );