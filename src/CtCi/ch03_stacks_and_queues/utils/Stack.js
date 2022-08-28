class Stack {
  #data;
  constructor() {
    this.#data = [];
  }

  push(value) {
    this.#data.push(value);
  }

  pop() {
    return this.#data.pop();
  }

  size() {
    return this.#data.length || 0;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peak() {
    return this.isEmpty() ? null : this.#data[this.size() - 1];
  }

  toArray() {
    return this.#data;
  }
}

export default Stack;
