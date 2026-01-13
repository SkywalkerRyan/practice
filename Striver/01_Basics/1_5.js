function recursion(i, n) {
	if (i > n) return;
	recursion(i + 1, n);
	console.log(i);
}
// recursion(1, 5);

function printName(name, i, n) {
	if (i > n) return;

	printName(name, i + 1, n);
	console.log(name);
}
// printName('Hello', 1, 5);

function sum(n) {
	if (n <= 0) return 0;

	return n + sum(n - 1);
}
// console.log(sum(6));

function sum2(number, current) {
	if (current > number) return 0;

	return current + sum2(number, current + 1);
}
console.log(sum2(8, 1));

function factorial(n) {
	if (n <= 0) return 1;

	return n * factorial(n - 1);
}
// console.log(factorial(3))

// function revArray( arr )
// {
//     let newArr = [];

//     for(let i = arr.length; i > 0; i--)
//         newArr.push(arr[i - 1]);

//     return newArr;
// }

// function revArray( arr )
// {
//     let item1 = 0;
//     let item2 = arr.length - 1;

//     while(item1 < item2)
//     {
//         let temp = arr[item1];

//         arr[item1] = arr[item2];
//         arr[item2] = temp;

//         item1++;
//         item2--;
//     }

//     return arr;
// }

function revArray(arr) {
	temp = arr[0];
	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = temp;

	let newArr = arr.remove[0];

	return revArray(newArr);
}
// console.log(revArray([1,2,3,4,5]));

// 0125
function isPalindrome(s) {
	s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let result = checkPalindrome(s);

	return result;
}

function checkPalindrome(s) {
	if (s.length === 1 || s.length === 0) return true;

	if (s[0] === s[s.length - 1]) {
		return checkPalindrome(s.substring(1, s.length - 1));
	} else return false;
}

// console.log(checkPalindrome("hannah"))

function fib(n) {}

// console.log(fib(2));
