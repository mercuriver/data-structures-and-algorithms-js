import { expect } from "chai";
import { sumList, sumListForward } from "./index.js";
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
  {
    firstList: [7, 6],
    secondList: [5, 9, 2, 4],
    expectForword: [6, 0, 0, 0],
    expectReverse: [2, 6, 3, 4],
  },
  {
    firstList: [5, 9, 2, 4],
    secondList: [7, 6],
    expectForword: [6, 0, 0, 0],
    expectReverse: [2, 6, 3, 4],
  },
];

describe("리스트의 합", function () {
  data.forEach((datum) => {
    it(`sumList => [${datum.firstList}], [${datum.secondList}]의 합 [${datum.expectReverse}]`, function () {
      expect(
        sumList(
          new LinkedList(datum.firstList),
          new LinkedList(datum.secondList)
        ).toArray()
      ).to.eql(datum.expectReverse);
    });
  });
  // data.forEach((datum) => {
  //   it(`sumListForward => [${datum.firstList}], [${datum.secondList}]의 합 [${datum.expectForword}]`, function () {
  //     expect(
  //       sumListForward(
  //         new LinkedList(datum.firstList),
  //         new LinkedList(datum.secondList)
  //       ).toArray()
  //     ).to.eql(datum.expectForword);
  //   });
  // });
});
