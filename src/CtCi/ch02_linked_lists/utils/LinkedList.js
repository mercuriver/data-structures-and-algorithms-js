import Node from "./Node.js";

class LinkedList {
  #head;
  #tail;
  constructor() {
    this.#head = undefined;
    this.#tail = undefined;
  }

  append(value) {
    const node = new Node(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      console.log("### append", node.value, node.next);
      if (this.#tail !== undefined) {
        this.#tail.next(node);
      }
      this.#tail = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    node.next(this.#head);
    this.#head = node;
  }

  pop() {
    const current = this.#head;

    if (!current) return null;
    if (!current.next) {
      this.#head = null;
      return current;
    }

    while (current.next.next) {
      current = current.next;
    }

    const last = this.#tail;
    this.#tail = current;
    this.#tail.next = null;
    return last;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}

export default LinkedList;
