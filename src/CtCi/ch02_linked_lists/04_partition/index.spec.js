import { expect } from "chai";
import partition from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    list: [],
    partition: 0,
    expect: [],
  },
  {
    list: [1],
    partition: 0,
    expect: [1],
  },
  {
    list: [1],
    partition: 1,
    expect: [1],
  },
  {
    list: [2, 1],
    partition: 1,
    expect: [2, 1],
  },
  {
    list: [2, 1],
    partition: 1,
    expect: [2, 1],
  },
  {
    list: [2, 1],
    partition: 2,
    expect: [1, 2],
  },
  {
    list: [3, 5, 8, 5, 10, 2, 1],
    partition: 5,
    expect: [3, 2, 1, 5, 8, 5, 10],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 0,
    expect: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 1,
    expect: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 3,
    expect: [2, 1, 10, 9, 8, 7, 6, 5, 4, 3],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 5,
    expect: [4, 3, 2, 1, 10, 9, 8, 7, 6, 5],
  },
  {
    list: [10, 9, 8, 4, 7, 6, 5, 4, 3, 2, 1],
    partition: 5,
    expect: [4, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5],
  },
  {
    list: [10, 9, 8, 5, 4, 7, 6, 5, 4, 3, 2, 1],
    partition: 5,
    expect: [4, 4, 3, 2, 1, 10, 9, 8, 5, 7, 6, 5],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 7,
    expect: [6, 5, 4, 3, 2, 1, 10, 9, 8, 7],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 10,
    expect: [9, 8, 7, 6, 5, 4, 3, 2, 1, 10],
  },
  {
    list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    partition: 11,
    expect: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
];

describe("분할", function () {
  data.forEach((datum) => {
    it(`${datum.partition} 값을 기준으로 ${datum.list} 분할: ${datum.expect}`, function () {
      expect(
        partition(new LinkedList(datum.list), datum.partition).toArray()
      ).to.eql(datum.expect);
    });
  });
});
