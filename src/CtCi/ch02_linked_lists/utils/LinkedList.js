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
      this.#tail.next = node;
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

  popFirst() {
    const first = this.#head;
    if (this.#head && this.#head.next) {
      this.#head = this.#head.next;
      first.next = null;
    } else {
      this.#head = null;
    }
    return first;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  toArray() {
    const result = [];
    let current = this.#head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

export default LinkedList;
