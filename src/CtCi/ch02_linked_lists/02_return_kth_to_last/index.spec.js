import { expect } from "chai";
import findKthToLast from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    list: [1],
    index: 0,
    expect: 1,
  },
  {
    list: [1, 2, 3, 4, 5],
    index: 3,
    expect: 2,
  },
  {
    list: [1, 2, 3, 4, 5],
    index: 5,
    expect: undefined,
  },
  {
    list: [1, 2, 3, 4, 5],
    index: -1,
    expect: undefined,
  },
  {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    index: 0,
    expect: 10,
  },
  {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    index: 9,
    expect: 1,
  },
];

describe("뒤에서 k번째 원소 구하기", function () {
  data.forEach((datum) => {
    it(`${datum.list}의 뒤에서 ${datum.index}번 원소: ${datum.expect}`, function () {
      expect(findKthToLast(new LinkedList(datum.list), datum.index)).to.equal(
        datum.expect
      );
    });
  });
});
