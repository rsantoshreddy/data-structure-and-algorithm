class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertToHead(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  insertToEnd(data) {
    const node = new Node(data);
    this.head = node;
  }
}
