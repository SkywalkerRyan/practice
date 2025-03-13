import { LinkedListDouble } from "../LinkedListDouble/linkedListDouble.js";
import { Node } from "./node.js";

export class Queue
{
	queue = new LinkedListDouble();

	enqueue (val)
	{
		this.queue.insertAtTail(val);
	}

	dequeue ()
	{
		const val = this.queue.peekHead();
		console.log(val);
		this.queue.deleteHead()
		return val;
	}

	peek ()
	{
		const val = this.queue.peekHead();
		console.log(val);
		return val;
	}

	print ()
	{
		this.queue.printList();
	}
}