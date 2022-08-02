import assert from "assert";
import palindromePermutation from "./index.js";

const data = [
  ["Tact Coa", true],
  ["mercuriver", false],
  ["reri curi vercu", true],
  ["acb", false],
  ["acb acb", false],
  ["acb ac", true],
];

describe("회문 순열", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}"의 회문 순열 여부는 [${datum[1]}]`, function () {
      assert.equal(palindromePermutation(datum[0]), datum[1]);
    });
  });
});
