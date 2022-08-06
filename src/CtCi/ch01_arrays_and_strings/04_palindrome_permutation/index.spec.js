import assert from "assert";
import palindromePermutation from "./index.js";
import { stringToCharArray } from "../utils/index.js";

const data = [
  ["Tact Coa", true],
  ["acb acb", true],
  ["acb ac", true],
  ["reri curi vercu", true],
  ["mercuriver", false],
  ["acb", false],
];

describe("회문 순열", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}"의 회문 순열 여부는 [${datum[1]}]`, function () {
      assert.equal(
        palindromePermutation(stringToCharArray(datum[0])),
        datum[1]
      );
    });
  });
});
