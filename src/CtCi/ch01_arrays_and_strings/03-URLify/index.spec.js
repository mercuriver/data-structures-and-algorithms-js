import assert from "assert";
import { urlify } from "./index.js";
import { stringToCharArray } from "../utils/index.js";

/**
 * 작업 기준:
 * 앞, 뒤로 붙은 ' '(space)는 trim하지 않음
 * ' '(space)와 '%20' 1:1로 치환
 */
const data = [
  ["Mr John Smith", 13, "Mr%20John%20Smith"],
  ["mercuriver", 10, "mercuriver"],
  ["Mr John Smith    ", 13, "Mr%20John%20Smith%20%20%20%20"],
  ["    Mr John Smith", 13, "%20%20%20%20Mr%20John%20Smith"],
  ["    Mr John Smith    ", 13, "%20%20%20%20Mr%20John%20Smith%20%20%20%20"],
  ["Mr    John    Smith", 13, "Mr%20%20%20%20John%20%20%20%20Smith"],
  [" M e r c u r i v e r ", 19, "%20M%20e%20r%20c%20u%20r%20i%20v%20e%20r%20"],
  ["", 0, ""],
  ["     ", 0, "%20%20%20%20%20"],
];

describe("URL화", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}", "${datum[1]}"의 URL화 결과 값은 [${datum[2]}]`, function () {
      assert.equal(urlify(stringToCharArray(datum[0]), datum[1]), datum[2]);
    });
  });
});
