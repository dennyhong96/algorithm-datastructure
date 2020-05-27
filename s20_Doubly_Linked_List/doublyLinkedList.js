class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev; // set new tail
      this.tail.next = null; // chop connect to old tail
      popedNode.prev = null; // remove lingering connections
    }
    this.length--;
    return popedNode;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) return this.pop();
    const oldHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.prev = newHead;
    }
    this.head = newHead;
    this.length++;
    return newHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, cursor;
    if (index <= this.length / 2) {
      current = this.head;
      cursor = 0;
      while (cursor < index) {
        current = current.next;
        cursor++;
      }
    } else {
      current = this.tail;
      cursor = this.length - 1;
      while (cursor > index) {
        current = current.prev;
        cursor--;
      }
    }
    return current;
  }

  set(index, value) {
    const alterNode = this.get(index);
    if (alterNode) {
      alterNode.val = value;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(val);
    newNode.prev = prevNode;
    prevNode.next = newNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removeNode = this.get(idx);
    const prevNode = removeNode.prev;
    const nextNode = removeNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prevNode = null;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = current.next;
      current.next = prevNode;
      current.prev = nextNode;
      prevNode = current;
      current = nextNode;
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

const list = new DoublyLinkedList();
list.push("HELLO");
list.push("I AM");
list.push("DENNY");
list.unshift("added at front");
list.insert(4, "inserted this!!!");
list.print();
console.log(list.remove(-1));
