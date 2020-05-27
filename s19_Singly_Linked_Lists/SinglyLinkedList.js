class Node {
  constructor(val) {
    this.val = val; // data
    this.next = null; // reference to next node
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = 0;
    this.tail = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current; // newTail is alway one step behind current
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      const newHead = new Node(val);
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (!foundNode) return undefined;
    foundNode.val = value;
    return foundNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const prevNode = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.lengh - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    // swith head tail reference
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    // relink the nodes
    let next;
    let prev = null; // need to initialize to null, new tail's next
    while (current) {
      next = current.next; // refrence to old next
      current.next = prev; // cut old link, reverse link to new next
      prev = current; // reference myself as prev for next loop
      node = next; // go on
    }
    return this;
  }

  print() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }
    console.log(list);
  }
}

// client
const list = new SinglyLinkedList();
list.push(3);
list.push(4);
list.push(5);
list.unshift(2);
list.unshift(1);
list.print();
list.reverse();
list.print();
