const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
      return;
    }
    const tailNode = this.tail;
    tailNode.next = node;
    this.tail = node;
  }

  dequeue() {
    const headNodeValue = this.head.value;
    const nextNode = this.head.next;
    this.head = nextNode;

    return headNodeValue;
  }
}

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);
// console.log("queue", queue);
// queue.dequeue();
// console.log("queue", queue);

module.exports = {
  Queue
};
