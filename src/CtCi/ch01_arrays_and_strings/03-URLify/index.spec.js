import assert from "assert";
import urlify from "./index.js";
import { stringToCharArray } from "../utils/index.js";

/**
 * Todo: 확인 사항
 * 앞, 뒤 여백은 trim해야하는가, %20로 치환해야 하는가
 * 1회 이상 반복되는 space는 하나의 여백으로 치환해야 하는가
 */
const data = [
  ["Mr John Smith", 13, "Mr%20John%20Smith"],
  ["Mr John Smith    ", 13, "Mr%20John%20Smith"],
  ["    Mr John Smith", 13, "Mr%20John%20Smith"],
  ["    Mr John Smith    ", 13, "Mr%20John%20Smith"],
  ["Mr    John    Smith", 13, "Mr%20John%20Smith"],
  [" M e r c u r i v e r ", 19, "M%20e%20r%20c%20u%20r%20i%20v%20e%20r"],
  ["", 0, ""],
  ["     ", 0, ""],
];

describe("URL화", function () {
  data.forEach((datum) => {
    it(`"${datum[0]}", "${datum[1]}"의 URL화 결과 값은 [${datum[2]}]`, function () {
      assert.equal(urlify(stringToCharArray(datum[0]), datum[1]), datum[2]);
    });
  });
});
