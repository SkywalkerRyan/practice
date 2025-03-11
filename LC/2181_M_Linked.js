/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head)
{
	let returnNode = { val: 0, next: null };
	let current = head.next;
	let currentReturn = returnNode;

	let i = 0;
	let sum = 0;

	while (current)
	{
		console.log("i : ", i);
		console.log("current : ", current);

		if (current.val !== 0)
		{
			sum += current.val;
		}
		else
		{
			if (returnNode === null)
			{
				returnNode.val = sum
			}
			else
			{
				currentReturn = { val: 0, next: null }
			}
			currentReturn = currentReturn.next;
			// if (currentReturn === null) 
			// {
			// 	console.log("currentReturn 1 : ", currentReturn);
			// 	currentReturn = { val: sum, next: null };
			// 	console.log("currentReturn 2 : ", currentReturn);
			// }
			// else 
			// {
			// 	console.log("currentReturn 3 : ", currentReturn);
			// 	currentReturn = { val: sum, next: null }
			// 	console.log("currentReturn 4 : ", currentReturn);
			// }
			// currentReturn = currentReturn.next;
			sum = 0;
		}
		console.log("currentReturn 0 : ", currentReturn);

		current = current.next;
		i++;



		// let returnNode = null;
		// let current = head.next;

		// let sum = 0;

		// while (current)
		// {
		// 	if (current.val !== 0)
		// 	{
		// 		sum += current.val;
		// 	}
		// 	else
		// 	{
		// 		if (returnNode !== null) 
		// 		{
		// 			returnNode.next = { val: sum, next: null };
		// 		}
		// 		else 
		// 		{
		// 			returnNode = { val: sum, next: null }
		// 		}
		// 		sum = 0;
		// 	}

		// 	current = current.next;
		// }

		// return returnNode;
	}

	return returnNode;
};

// const testVal = { val: 0, next: null }
// const testVal = { val: 0, next: { val: 2, next: { val: 0, next: null } } }
// const testVal = { val: 0, next: { val: 3, next: { val: 1, next: { val: 0, next: { val: 4, next: { val: 5, next: { val: 2, next: { val: 0, next: null } } } } } } } }
const testVal = { val: 0, next: { val: 1, next: { val: 0, next: { val: 3, next: { val: 0, next: { val: 2, next: { val: 2, next: { val: 0, next: null } } } } } } } }

console.log(mergeNodes(testVal))