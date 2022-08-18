import { expect } from "chai";
import sumList from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    list: [],
    expect: 0,
    expectReverse: 0,
  },
  {
    list: [1],
    expect: 1,
    expectReverse: 1,
  },
  {
    list: [2, 1],
    expect: 21,
    expectReverse: 12,
  },
  {
    list: [3, 5, 8, 5, 1, 2, 1],
    expect: 3585121,
    expectReverse: 1215853,
  },
  {
    list: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    expect: 987654321,
    expectReverse: 123456789,
  },
];

describe("리스트의 합", function () {
  data.forEach((datum) => {
    it(`[정방향] ${datum.list} 의 합 ${datum.expect}`, function () {
      expect(sumList(new LinkedList(datum.list)), true).to.equal(datum.expect);
    });
  });
  data.forEach((datum) => {
    it(`[역방향] ${datum.list} 의 합 ${datum.expect}`, function () {
      expect(sumList(new LinkedList(datum.list))).to.equal(datum.expect);
    });
  });
});
