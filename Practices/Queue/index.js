import { Queue } from "./queue.js";

// const LinkedList = require('./linkedList')

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
queue.dequeue();
queue.print();