import { expect } from "chai";
import deleteMiddleNode from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    list: [1],
    target: 0,
    expect: 1,
  },
  {
    list: [1],
    target: 1,
    expect: [],
  },
  {
    list: [1, 2],
    target: 1,
    expect: [2],
  },
  {
    list: [1, 2],
    target: 2,
    expect: [1],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 1,
    expect: [2, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 5,
    expect: [1, 2, 3, 4],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: -1,
    expect: [1, 2, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 2,
    expect: [1, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 3,
    expect: [1, 2, 4, 5],
  },
];

describe("중간 노드 삭제", function () {
  data.forEach((datum) => {
    it(`${datum.list} 중 ${datum.target} 노드 제거 후 값: ${datum.expect}`, function () {
      expect(
        deleteMiddleNode(new LinkedList(datum.list), datum.target).toArray()
      ).to.eql(datum.expect);
    });
  });
});
