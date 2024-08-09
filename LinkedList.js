// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else {
      let previous = null;
      let current = this.head;
      let currentindex = 0;

      while (currentindex < index) {
        previous = current;
        current = current.next;
        currentindex++;
      }

      previous.next = newNode;
      newNode.next = current;

      if (newNode.next === null) {
        this.tail = newNode;
      }
    }

    this.length++;
  }

  printList() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const list = new LinkedList();
list.append("First");
list.append("Second");
list.append("Third");
list.insertAt("Inserted at 1", 1);
list.printList();
