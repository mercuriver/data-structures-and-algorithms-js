import assert from "assert";
import { isUnique, isUniqueWithDataStructure } from "./index.js";

const data = [
  ["abcd", true],
  ["abccd", false],
  ["mercuriver", false],
  ["string", true],
];

describe("중복이 없는가", function () {
  describe("기본적인 풀이", function () {
    data.forEach((datum) => {
      it(`${datum[0]}는 ${datum[1]}이여야 함`, function () {
        assert.equal(isUniqueWithDataStructure(datum[0]), datum[1]);
      });
    });
  });

  describe("추가 자료구조를 사용하지 않는 풀이", function () {
    data.forEach((datum) => {
      it(`${datum[0]}는 ${datum[1]}이여야 함`, function () {
        assert.equal(isUnique(datum[0]), datum[1]);
      });
    });
  });
});
