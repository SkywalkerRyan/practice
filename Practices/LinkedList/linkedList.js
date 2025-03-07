import { Node } from "./node.js";

// const Node = require('./node')

/*

append
insertAtHead
insertAtTail
insertAtPos

delete
deleteHead
deleteTail
deleteAtPos

search
printList
getSize


*/

export class LinkedList
{
  constructor ()
  {
    this.head = null;
    this.size = 0;
  }

  append (val)
  {
    const newNode = new Node(val);

    this.size++;
    if (!this.head)
    {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next)
      current = current.next;

    current.next = newNode;
  }

  printList ()
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
