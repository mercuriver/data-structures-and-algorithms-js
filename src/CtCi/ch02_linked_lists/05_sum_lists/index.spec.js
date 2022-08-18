import { expect } from "chai";
import sumList from "./index.js";
import { LinkedList } from "../utils/index.js";

const data = [
  {
    firstList: [5],
    secondList: [9],
    expectForword: [1, 4],
    expectReverse: [4, 1],
  },
  {
    firstList: [5, 4],
    secondList: [7, 9],
    expectForword: [1, 3, 3],
    expectReverse: [2, 4, 1],
  },
  {
    firstList: [7, 1, 6],
    secondList: [5, 9, 2],
    expectForword: [1, 3, 0, 8],
    expectReverse: [2, 1, 9],
  },
];

describe("리스트의 합", function () {
  // data.forEach((datum) => {
  //   it(`[정방향] ${datum.list} 의 합 ${datum.expect}`, function () {
  //     expect(sumList(new LinkedList(datum.list)), true).to.equal(datum.expect);
  //   });
  // });
  // data.forEach((datum) => {
  //   it(`[역방향] ${datum.list} 의 합 ${datum.expect}`, function () {
  //     expect(sumList(new LinkedList(datum.list))).to.equal(datum.expect);
  //   });
  // });
});
