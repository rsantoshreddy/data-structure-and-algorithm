/*
    Advantages of Linked List over array
    1. Less Memory wastage due to dynamic memory allocation.
    2. Ease of Insertion/deletion: Only Modification of pointers reqd.
*/

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

LinkedList.prototype.add = function (data) {
    const node = new Node(data);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
}

LinkedList.prototype.delete = function (data) {
    const node = new Node(data);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
}