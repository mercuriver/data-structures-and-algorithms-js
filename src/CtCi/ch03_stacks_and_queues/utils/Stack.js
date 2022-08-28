class Stack {
  #data;
  constructor() {
    this.#data = [];
  }

  push(value) {
    this.#data.push(value);
    // Todo: 체이닝 고려 중 이지만, push에만 적용 가능할 것이므로 일관성이 없음
    // return this;
  }

  pop() {
    return this.isEmpty() ? null : this.#data.pop();
  }

  size() {
    return this.#data.length || 0;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.#data[this.size() - 1];
  }

  toArray() {
    return this.#data;
  }
}

export default Stack;
