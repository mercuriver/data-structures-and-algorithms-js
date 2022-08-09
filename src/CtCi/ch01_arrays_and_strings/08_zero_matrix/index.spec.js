import assert from "assert";
import zeroMatrix from "./index.js";
import {
  ERROR_CODE_INVALID_MATRIX,
  ERROR_CODE_NON_RECTANGULAR_MATRIX,
} from "../utils/index.js";

const invalidData = [null, undefined, []];
const unfitMatrixData = [
  [["10"], ["1"]],
  [["00", "10"], ["10"]],
  [
    ["00", "000", "100"],
    ["100", "000", "000"],
  ],
];
const data = [
  [["1"], ["1"]],
  [["0"], ["0"]],
  [
    ["11", "10"],
    ["10", "00"],
  ],
  [
    ["01", "10"],
    ["00", "00"],
  ],
  [
    ["11", "11"],
    ["11", "11"],
  ],
  [
    ["111", "101", "111"],
    ["101", "000", "101"],
  ],
  [
    ["1111", "1111", "1111", "1110"],
    ["1110", "1110", "1110", "0000"],
  ],
  [
    ["1111", "1011", "1110", "1111"],
    ["1010", "0000", "0000", "1010"],
  ],
];

// assert가 chai.assert가 아닌 node.assert인 것에 주의
describe("0 행렬", () => {
  invalidData.forEach((datum) => {
    it("값이 [ null | undefined | empty ] 일 경우 에러 발생", () =>
      assert.throws(
        () => {
          zeroMatrix(datum);
        },
        (error) => error.message === ERROR_CODE_INVALID_MATRIX
      ));
  });

  unfitMatrixData.forEach((datum) => {
    it(`유효하지 않은 행렬 ${datum}`, () =>
      assert.throws(
        () => {
          zeroMatrix(datum);
        },
        (error) => error.message === ERROR_CODE_NON_RECTANGULAR_MATRIX
      ));
  });

  data.forEach((datum) => {
    it(`zeroMatrix("${datum[0]}") => "${datum[1]}"`, () => {
      assert.equal(zeroMatrix(datum[0]).join(","), datum[1].join(","));
    });
  });
});
