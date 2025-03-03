
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function( s )
{
    if( s.length %2 == 1 ) return false;
    let stack = [];

    for( let i = 0; i < s.length; i++ )
    {
        let char = s[i];
        if( valid[char] )
        {
            stack.push( valid[char] )
        }
        else
        {
            if( stack.pop() !== char )  return false;
        }
    }

    return !stack.length;
}

const valid = {
    '(': ')',
    '{': '}',
    '[': ']'
}

console.log( isValid( "({})" ) );
// console.log( isValid( "()" ) );
// console.log( isValid( "(){}[]()" ) );
// console.log( isValid( "([)]" ) );
// console.log( isValid( "(]" ) );
// console.log( isValid( "[[" ) );