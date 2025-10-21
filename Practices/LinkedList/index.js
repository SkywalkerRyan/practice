import { LinkedList } from './linkedList.js';
// import { isPalindrome } from '../../Striver/6_3.ts';

// const LinkedList = require('./linkedList')

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
// isPalindrome(list);
// list.insert(3, 25);
// list.printList();
// list.deleteAtPos(2);
list.printList();
console.log(list.oddEvenListDouble());
list.printList();
