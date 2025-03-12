/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s)
{
	let stk = [];

	for (let i = 0; i < s.length; i++)
	{
		if (stk.length > 0 && stk[stk.length - 1] === s[i])
			stk.pop()
		else
			stk.push(s[i])
	}

	return stk.join('');
};

// const testVal = "abbaca";
const testVal = "azxxzy";

console.log(removeDuplicates(testVal));