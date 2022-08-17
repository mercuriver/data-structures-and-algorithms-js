import { expect } from "chai";
import { deleteNode, deleteMiddleNode } from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    list: [1],
    target: 0,
    expectAll: [1],
    expectMiddle: [1],
  },
  {
    list: [1],
    target: 1,
    expectAll: [],
    expectMiddle: [1],
  },
  {
    list: [1, 2],
    target: 1,
    expectAll: [2],
    expectMiddle: [1, 2],
  },
  {
    list: [1, 2],
    target: 2,
    expectAll: [1],
    expectMiddle: [1, 2],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 1,
    expectAll: [2, 3, 4, 5],
    expectMiddle: [1, 2, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 5,
    expectAll: [1, 2, 3, 4],
    expectMiddle: [1, 2, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: -1,
    expectAll: [1, 2, 3, 4, 5],
    expectMiddle: [1, 2, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 2,
    expectAll: [1, 3, 4, 5],
    expectMiddle: [1, 3, 4, 5],
  },
  {
    list: [1, 2, 3, 4, 5],
    target: 3,
    expectAll: [1, 2, 4, 5],
    expectMiddle: [1, 2, 4, 5],
  },
];

describe("중간 노드 삭제", function () {
  data.forEach((datum) => {
    it(`[deleteNode] ${datum.list} 중 ${datum.target} 노드 제거 후 값: ${datum.expectAll}`, function () {
      expect(
        deleteNode(new LinkedList(datum.list), datum.target).toArray()
      ).to.eql(datum.expectAll);
    });
  });
  data.forEach((datum) => {
    it(`[deleteMiddleNode] ${datum.list} 중 ${datum.target} 노드 제거 후 값: ${datum.expectMiddle}`, function () {
      expect(
        deleteMiddleNode(new LinkedList(datum.list), datum.target).toArray()
      ).to.eql(datum.expectMiddle);
    });
  });
});
