import { Node } from "./node.js";

// const Node = require('./node')

/*
// append | insertAtTail
// prepend | insertAtHead
// insert | insertAtPos

// clearList
deleteHead
deleteTail
deleteAtPos

search
// printList
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

  prepend (val)
  {
    const newNode = new Node(val);

    this.size++;
    newNode.next = this.head;
    this.head = newNode;
  }

  insert (pos, val)
  {
    this.size++;

    if (pos == 0)
    {
      this.prepend(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;

    for (let i = 1; i <= pos - 1; i++)
    {
      console.log("!!!!!!!!!!!!!! current : ", current);
      console.log("!!!!!!!!!!!!!! newNode : ", newNode);
      if (i == pos - 1)
      {
        newNode.next = current.next;
        current.next = newNode;
      }

      current = current.next;
    }
  }

  clearList ()
  {
    this.head = null;
    this.size = 0;
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
