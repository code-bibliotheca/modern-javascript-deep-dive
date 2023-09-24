class Node {
  _value;
  _next;

  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }

  // ... do something...!
}

class SinglyLinkedList {
  #head = null;
  #tail = null;

  // ... do something...!
}

export { SinglyLinkedList as default, Node };
