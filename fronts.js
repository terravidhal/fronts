class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  // Add a new node to the beginning of the list
  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  // Remove the head node and return the new head
  removeFront() {
    if (!this.head) return null; // List is empty
    const removedNode = this.head;
    this.head = this.head.next;
    return this.head;
  }

  // Return the value of the head node (not the node itself)
  front() {
    return this.head ? this.head.data : null; // Check if head exists
  }
}

// Example Usage
const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
console.log(SLL1.front()); // 73
console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.front()); // 5
console.log(SLL1.removeFront()); // Node { data: 18, next: null }
console.log(SLL1.front()); // 18
console.log(SLL1.removeFront()); // null
console.log(SLL1.front()); // null (list is empty)