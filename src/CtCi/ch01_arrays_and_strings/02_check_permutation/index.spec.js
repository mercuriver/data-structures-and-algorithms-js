import assert from "assert";
import { checkPermute, checkPermuteBySort } from "./index.js";
import { stringToCharArray } from "../utils/index.js";

const data = [
  ["abc", "bac", true],
  ["1234567812345678", "8877665544332211", true],
  ["", "", false],
  ["mercuriver", "mercuryriver", false],
  ["abc", "aabbcc", false],
  ["12345", "23456", false],
  ["aabbcc", "abc", false],
];

describe("순열 확인", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}", "${datum[1]}"의 순열 여부는 [${datum[2]}]`, function () {
      assert.equal(
        checkPermute(stringToCharArray(datum[0]), stringToCharArray(datum[1])),
        datum[2]
      );
    });
  });
});

describe("순열 확인 (정렬 방식 적용)", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}", "${datum[1]}"의 순열 여부는 [${datum[2]}]`, function () {
      assert.equal(
        checkPermuteBySort(
          stringToCharArray(datum[0]),
          stringToCharArray(datum[1])
        ),
        datum[2]
      );
    });
  });
});
