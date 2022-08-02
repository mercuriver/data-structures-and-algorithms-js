import assert from "assert";
import oneAway from "./index.js";
import { stringToCharArray } from "../utils/index.js";

const data = [
  ["pale", "ple", true],
  ["pales", "pale", true],
  ["pale", "bale", true],
  ["pale", "bake", false],
  ["mercuriver", "Mercuriver", true],
  ["mercuriver", "Mercuryver", false],
];

describe("하나 빼기", function () {
  data.forEach((datum) => {
    it(`"${datum[1]}"은 "${datum[0]}"에서 1회 이내의 편집을 통해 구성 가능한 값이다: [${datum[2]}]`, function () {
      assert.equal(
        oneAway(stringToCharArray(datum[0]), stringToCharArray(datum[1])),
        datum[2]
      );
    });
  });
});
