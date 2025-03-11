import { Node } from "./node.js";

export class Stack
{
	constructor ()
	{
		this.head = null;
		this.size = 0;
	}

	push (val)
	{
		this.size++;

		if (!this.head)
		{
			const newNode = new Node(val, null);
			this.head = newNode;
			return;
		}
		else
		{
			const newNode = new Node(val, this.head)
			this.head = newNode;
			return
		}
	}

	pop ()
	{
		this.size--;

		const temp = this.head.val;
		this.head = this.head.next;

		console.log(temp);
	}

	printStack ()
	{
		let current = this.head;

		let result = "";

		while (current)
		{
			result += current.val + "->";
			current = current.next;
		}
		console.log(result + 'end')
	}
}