/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function( s )
{
    let length = 0;

    for( let i = s.length; i > 0; i-- )
    {
        if( s[i-1] !== ' ' ) length++;
        else if ( length ) return length;
    }
    
    return length;
};

console.log( lengthOfLastWord( "Hello World" ) );    //  5
// console.log( lengthOfLastWord( "   fly me   to   the moon  " ) );    //  4
// console.log( lengthOfLastWord( "luffy is still joyboy" ) );  //  6