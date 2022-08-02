import assert from "assert";
import checkPermute from "./index.js";

const data = [
  ["abc", "bac", true],
  ["", "", true],
  ["1234567812345678", "8877665544332211", true],
  ["mercuriver", "mercuryriver", false],
  ["abc", "aabbcc", false],
  ["12345", "23456", false],
];

describe("순열 확인", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}", "${datum[1]}"의 순열 여부는 [${datum[2]}]`, function () {
      assert.equal(checkPermute(datum[0], datum[1]), datum[2]);
    });
  });
});
