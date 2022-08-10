import Node from "./Node.js";

class LinkedList {
  #head;
  #tail;
  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next(node);
      this.#tail = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    node.next(this.#head);
    this.#head = node;
  }
}

export default LinkedList;
