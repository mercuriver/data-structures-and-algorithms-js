import Node from "./Node.js";

class LinkedList {
  #head;
  #tail;
  constructor(value) {
    this.#head = undefined;
    this.#tail = undefined;

    if (!!value) {
      this.#toList(value);
    }
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
    return this;
  }

  prepend(value) {
    this.#head = new Node(value, this.#head);
    return this;
  }

  pop() {
    let current = this.#head;

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
    return last.value;
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
    return first.value;
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
          return true;
        }
      } else {
        prev = current;
        current = current.next;
        i++;
      }
    }
    return false;
  }

  insertAt(index, value) {
    if (index === 0) {
      this.prepend(value);
      return true;
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

  #toList(value) {
    const source = Array.isArray(value) ? value : [value];
    const { length } = source;
    let current = null;

    for (let i = length - 1; i >= 0; i--) {
      current = new Node(source[i], current);
      if (current.next === null) {
        this.#tail = current;
      }
    }

    this.#head = current;
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
  set head(node) {
    this.#head = node;
  }

  get tail() {
    return this.#tail;
  }

  get length() {
    let count = 0;
    let current = this.#head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

export default LinkedList;
