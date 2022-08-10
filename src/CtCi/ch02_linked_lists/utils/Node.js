class Node {
  #value;
  #next;
  constructor(value, next = null) {
    this.#value = value;
    this.#next = next;
  }

  set next(next) {
    this.#next = next;
  }
}

export default Node;
