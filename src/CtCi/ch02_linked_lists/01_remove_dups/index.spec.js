import { expect } from "chai";
import removeDuplicates from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    list: [1],
    expect: [1],
  },
  {
    list: [1, 1, 1, 1, 1, 1],
    expect: [1],
  },
  {
    list: [2, 1, 2, 1],
    expect: [2, 1],
  },
  {
    list: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    expect: [1, 2],
  },
  {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    list: [10, 1, 2, 3, 9, 4, 5, 8, 6, 7, 8, 9, 10],
    expect: [10, 1, 2, 3, 9, 4, 5, 8, 6, 7],
  },
];

describe("중복 없애기", function () {
  data.forEach((datum) => {
    it(`${datum.list} 중복 제거 후의 값: ${datum.expect}`, function () {
      expect(removeDuplicates(new LinkedList(datum.list)).toArray()).to.eql(
        datum.expect
      );
    });
  });
});
