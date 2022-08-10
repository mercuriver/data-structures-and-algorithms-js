class Node {
  #value;
  #next;
  constructor(value, next = undefined) {
    this.#value = value;
    this.#next = next;
  }

  get value() {
    return this.#value;
  }

  get next() {
    return this.#next;
  }
  set next(next) {
    this.#next = next;
  }
}

export default Node;
