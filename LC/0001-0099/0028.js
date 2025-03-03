/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) 
{
    if( !needle ) return 0;
    if( !haystack.includes( needle ) ) return -1;

    let hidx = -1;
    let nidx = 0;

    for( let i = 0; i < haystack.length; i++ )
    {
        if( haystack[i] == needle[nidx] )
        {
            hidx = i;
            nidx++;

            if( nidx == needle.length ) break;
        }
        else
        {
            i -= nidx;
            hidx = -1;
            nidx = 0;
        }
    }

    return hidx - nidx + 1;
};

console.log( strStr( "hello", "ll" ) );  //  2
// console.log( strStr( "aaaaa", "bba" ) ); //  -1
// console.log( strStr( "ababbbaabbba", "abb" ) ); //  6
// console.log( strStr( "bbbbababbbaabbba", "abb" ) ); //  6