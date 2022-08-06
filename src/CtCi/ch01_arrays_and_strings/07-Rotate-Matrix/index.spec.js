import assert from "assert";
import rotateMatrix, {
  ERROR_CODE_INVALID_MATRIX,
  ERROR_CODE_UNFIT_MATRIX,
} from "./index.js";
import { stringToCharArray } from "../utils/index.js";

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
  [
    ["00", "10"],
    ["10", "00"],
  ],
  [
    ["000", "000", "100"],
    ["100", "000", "000"],
  ],
  [
    ["0000", "0000", "0000", "1000"],
    ["1000", "0000", "0000", "0000"],
  ],
];
describe("행렬 회전", function () {
  invalidData.forEach((datum) => {
    it("값이 [ null | undefined | empty ] 일 경우 에러 발생", () =>
      assert.throws(
        () => {
          rotateMatrix(datum);
        },
        Error,
        ERROR_CODE_INVALID_MATRIX
      ));
  });

  //   unfitMatrixData.forEach((datum) => {
  //     it(`유효하지 않은 행렬 ${datum}`, () =>
  //       assert.throws(
  //         () => {
  //           rotateMatrix(datum);
  //         },
  //         Error,
  //         ERROR_CODE_UNFIT_MATRIX
  //       ));
  //   });

  data.forEach((datum) => {
    it(`rotateMatrix("${datum[0]}") => "${datum[1]}"`, () => {
      assert.equal(rotateMatrix(datum[0]), datum[1]);
    });
  });
});
