import assert from "assert";
import stringRotation from "./index.js";

const data = [
  ["waterbottle", "bottlewater", true],
  ["mercuriver", "vermercuri", true],
  ["a", "a", true],
  ["aba", "baa", true],
  ["helloworld", "worldhello", true],
  ["ioioioioooi", "ioooiioioio", true],
  ["mercuriver", "vermercury", false],
  ["helloworld", "helworldlo", false],
  ["helloworld", "helworldlo", false],
  ["ioioioioooi", "iooiiioioio", false],
];

describe("문자열 회전", function () {
  data.forEach((datum) => {
    it(`"${datum[1]}", "${datum[0]}" 두 문자열은 상호 문자열 회전 관계: [${datum[2]}]`, () => {
      assert.equal(stringRotation(datum[0], datum[1]), datum[2]);
    });
  });
});
