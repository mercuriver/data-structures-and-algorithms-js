import { expect } from "chai";
import { arrayToLinkedList } from "./index.js";

const data = [
  {
    list: [1],
    expect: {
      node: 1,
      next: null,
    },
  },
  {
    list: [1, 2, 3, 4],
    expect: {
      node: 1,
      next: {
        node: 2,
        next: {
          node: 3,
          next: {
            node: 4,
            next: null,
          },
        },
      },
    },
  },
  {
    list: [],
    expect: null,
  },
];

describe("arrayToLinkedList 테스트", function () {
  data.forEach((datum) => {
    it(`${datum.list}의 연결 리스트 데이터: ${datum.expect}`, function () {
      expect(arrayToLinkedList(datum.list)).to.eql(datum.expect); // passes
    });
  });
});
