class Node {
  #value;
  #next;
  #uid;
  constructor(value, next = undefined) {
    this.#value = value;
    this.#next = next;
    this.#uid = Symbol("Unique Node ID");
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

  get uid() {
    return this.#uid;
  }

  toString() {
    return JSON.stringify({
      value: this.#value,
      next: this.#next?.value || undefined,
      // uid: this.#uid.toString(),
    });
  }
}

export default Node;
