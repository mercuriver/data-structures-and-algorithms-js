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
    this.#head = new Node(value, this.#head);
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

  // popFirst
  shift() {
    const first = this.#head;
    if (this.#head && this.#head.next) {
      this.#head = this.#head.next;
      first.next = null;
    } else {
      this.#head = null;
    }
    return first;
  }

  removeAt(index) {
    let i = 0;
    let current = this.#head;
    let prev = null;

    while (current !== null) {
      if (i == index) {
        if (prev === null) {
          this.#head = current.next;
        } else {
          prev.next = current.next;
          current.next = null;
          return current.value;
        }
      } else {
        prev = current;
        current = current.next;
        i++;
      }
    }
    return null;
  }

  insertAt(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    let current = this.#head;
    let i = 0;

    while (current !== null) {
      if (i == index - 1) {
        current.next = new Node(value, current.next);
        return true;
      } else {
        i++;
        current = current.next;
      }
    }

    // Todo: index가 length를 초과할 경우, 마지막에 append 할지 여부 고민
    return false;
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

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}

export default LinkedList;
