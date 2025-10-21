import { LinkedList } from './linkedList.js';
// import { isPalindrome } from '../../Striver/6_3.ts';

// const LinkedList = require('./linkedList')

let list = new LinkedList();

list.append(1);
list.append(2);
// list.append(2);
list.append(1);
// isPalindrome(list);
// list.insert(3, 25);
// list.printList();
// list.deleteAtPos(2);
list.printList();
console.log(list.isPalindrome());
