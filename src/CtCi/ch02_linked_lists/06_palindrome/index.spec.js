import { expect } from "chai";
import { stringToCharArray } from "../../ch01_arrays_and_strings/utils/index.js";
import { LinkedList } from "../utils/index.js";
import { reverseClone } from "./index.js";

const data = [
  {
    value: "a",
    expect: true,
  },
  {
    value: "aba",
    expect: true,
  },
  {
    value: "abba",
    expect: true,
  },
  {
    value: "mercuriver",
    expect: false,
  },
  {
    value: "mercuryrucrem",
    expect: true,
  },
];

describe("회문", function () {
  data.forEach((datum) => {
    it(`[reverseClone]'${datum.value}'은 회문${
      datum.expect ? "이다" : "아니다"
    }`, function () {
      expect(
        reverseClone(new LinkedList(stringToCharArray(datum.value)))
      ).to.equal(datum.expect);
    });
  });
});
