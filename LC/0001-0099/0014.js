/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function( strs ) 
{
	let val = "";
	for ( let i = 0; i < strs[0].length; i++ ) {
		if (!strs.every((str) => str[i] === strs[0][i])) { break; }
		val += strs[0][i];
	}
	return val;
};
var longestCommonPrefix2 = function( strs ) 
{
	let val = strs[0];

	for( let i = 1; i < strs.length; i++ )
	{		
		let length = val.length > strs[i].length ? strs[i].length : val.length;

		let temp = '';
		for( let j = 0; j < length; j++ )
		{
			if( val[j] === strs[i][j] )
			{
				temp = strs[i].slice( 0, j + 1 )
			}
			else
			{
				break;
			}
		}
		val = temp;
	};
	
	return val;
};

// console.log( longestCommonPrefix1( ["ab","a"] ) );
console.log( longestCommonPrefix1( ["flower","flow","flight"] ) );
// console.log( longestCommonPrefix1( ["dog","racecar","car"] ) );