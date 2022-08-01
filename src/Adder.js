class Adder {
  #first;
  #second;

  constructor(first, second) {
    this.#first = first;
    this.#second = second;
  }

  get summary() {
    return this.#first + this.#second;
  }
}

export default Adder;
