/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s)
{
	let sn = [];

	for (let i = 0; i < s.length; i++)
	{
		const char = s[i];

		if (sn.length && char !== sn[sn.length - 1] && char.toLowerCase() === sn[sn.length - 1].toLowerCase())
			sn.pop()
		else
			sn.push(char);
	}

	return sn.join('')
}



// let sn = [];

// for (let i = 0; i < s.length; i++)
// {
// 	const char = s[i];

// 	console.log("char : ", char);

// 	if (/^[A-Z]$/.test(char))
// 	{
// 		let last = sn.pop();
// 		console.log("11 : last : ", last);

// 		if (last === char.toLowerCase())
// 		{ console.log("1") }
// 		else if (s[i + 1] === char.toLowerCase())
// 		{
// 			console.log("2")
// 			sn.push(last);
// 			i = i + 1;
// 		}
// 		else
// 		{
// 			console.log("3")
// 			sn.push(last);
// 			sn.push(char);
// 		}
// 	}
// 	else
// 	{
// 		console.log("12");
// 		sn.push(char);
// 	}


// 	console.log("sn : ", sn);
// 	// stackCap.push(char)
// 	// else
// 	// stackSmall.push(char)
// }

// return sn.join('')
// };

// const testVal = "mC"
// const testVal = "Pp"
// const testVal = "leEeetcode"
// const testVal = "abBAcC"
// const testVal = "s"
const testVal = "Hvh"
// const testVal = "RLlr"

console.log(makeGood(testVal))


/*
var makeGood = function (s)
{
	

	let stackCap = [];
	let stackSmall = [];

	for (let i = 0; i < s.length; i++)
	{
		const char = s[i];

		if (/^[A-Z]$/.test(char))
			stackCap.push(char)
		else
			stackSmall.push(char)
	}

	stackSmall = stackSmall.join('');

	for (let i = 0; i < stackCap.length; i++)
		stackSmall = stackSmall.replace(stackCap[i].toLowerCase(), '');

	return stackSmall;
};

const testVal = "Pp"
// const testVal = "leEeetcode"
// const testVal = "abBAcC"
// const testVal = "s"

console.log(makeGood(testVal))

*/