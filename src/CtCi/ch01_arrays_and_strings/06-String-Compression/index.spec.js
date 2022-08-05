import assert from "assert";
import stringCompression from "./index.js";
import { stringToCharArray } from "../utils/index.js";

const data = [
  ["aabcccccaaa", "a2b1c5a3"],
  ["mercuriver", "mercuriver"],
  ["a", "a"],
  ["aa", "aa"],
  ["aaa", "a3"],
  ["abbcccdddd", "a1b2c3d4"],
  ["helloworld", "helloworld"],
  ["hwrdellloo", "hwrdellloo"],
  ["haealalaoawaoaralad", "haealalaoawaoaralad"],
  ["aaaaaaaaaahwrdellloo", "a10h1w1r1d1e1l3o2"],
];

describe("문자열 압축", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}" => "${datum[1]}"`, function () {
      assert.equal(stringCompression(stringToCharArray(datum[0])), datum[1]);
    });
  });
});
