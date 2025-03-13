import { Node } from "./node.js";

// const Node = require('./node')

/*
// append | insertAtTail
// prepend | insertAtHead
// insert | insertAtPos

// clearList
// deleteHead
// deleteTail
// deleteAtPos

search
// printList
getSize
*/

export class LinkedListDouble
{
	constructor ()
	{
		this.head = null;
		this.size = 0;
		this.tail = null
	}

	insertAtHead (val)
	{
		const newNode = new Node(val);

		if (this.isEmpty())
		{
			this.head = newNode;
			this.tail = newNode;
		}
		else
		{
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.size++;
		return;
	}

	insertAtTail (val)
	{
		const newNode = new Node(val);

		if (this.isEmpty())
		{
			this.head = newNode;
			this.tail = newNode;
		}
		else
		{
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.size++;
		return;
	}

	insertAtPos (pos, val)
	{
		if (pos === 0) return this.insertAtHead(val)

		if (pos === this.size) return this.insertAtTail(val);

		const newNode = new Node(val);
		let current = this.head;
		for (let i = 1; i < pos + 1; i++)
		{
			if (i === pos - 1)
			{
				newNode.next = current.next;
				newNode.prev = current;
				current.next = newNode;
			}
			if (i === pos + 1)
				current.prev = newNode;

			current = current.next;
		}
	}

	deleteHead ()
	{
		let newHead = this.head.next;
		newHead.prev = null;

		this.head = newHead;
		this.size--;
	}

	deleteTail ()
	{
		let newTail = this.tail.prev;
		newTail.next = null;

		this.tail = newTail;
		this.size--;
	}

	printList ()
	{
		let result = "";
		let current = this.head;

		while (current)
		{
			result += current.val + "->";
			current = current.next;
		}
		console.log(result + 'end')
	}

	isEmpty ()
	{
		return this.size === 0;
	}
}