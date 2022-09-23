import LinkedList from "./LinkedList.js";

class Queue {
  #list;
  constructor() {
    this.#list = new LinkedList();
  }

  enqueue(value) {
    this.#list.append(value);
  }

  dequeue() {
    return this.#list.shift();
  }

  peek() {
    return this.#list.head ? this.#list.head.value : null;
  }

  isEmpty() {
    console.log(this.#list.head);
    return this.#list.head === null;
  }

  toArray() {
    return this.#list.toArray();
  }
}

export default Queue;
