import { LinkedList } from "./linkedList.js";

// const LinkedList = require('./linkedList')

let list = new LinkedList();

list.append(20);
list.prepend(10);
list.append(30);
list.append(40);
list.insert(3, 25);
list.printList();
list.deleteAtPos(2);
list.printList();