import assert from "assert";
import stringRotation from "./index.js";
import { stringToCharArray } from "../utils/index.js";

const data = [
  ["waterbottle", "bottlewater", true],
  ["mercuriver", "vermercuri", true],
  ["a", "a", true],
  ["aba", "baa", true],
  ["helloworld", "worldhello", true],
  ["mercuriver", "vermercury", false],
  ["helloworld", "helworldlo", false],
];

describe("문자열 회전", function () {
  data.forEach((datum) => {
    it(`"${datum[1]}", "${datum[0]}" 두 문자열은 상호 문자열 회전 관계: [${datum[2]}]`, () => {
      assert.equal(
        stringRotation(
          stringToCharArray(datum[0]),
          stringToCharArray(datum[1])
        ),
        datum[2]
      );
    });
  });
});
