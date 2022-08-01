import assert from "assert";
import isUnique from "./index.js";

const case1 = ["abcd", true];
const case2 = ["abccd", false];
const case3 = ["bhjjb", false];
const case4 = ["mdjq", true];

describe("중복이 없는가", function () {
  describe("기본적인 풀이", function () {
    it(`${case1[0]}는 ${case1[1]}이여야 함`, function () {
      assert.equal(isUnique(case1[0]), case1[1]);
    });
    it(`${case2[0]}는 ${case2[1]}이여야 함`, function () {
      assert.equal(isUnique(case2[0]), case2[1]);
    });
    it(`${case3[0]}는 ${case3[1]}이여야 함`, function () {
      assert.equal(isUnique(case3[0]), case3[1]);
    });
    it(`${case4[0]}는 ${case4[1]}이여야 함`, function () {
      assert.equal(isUnique(case4[0]), case4[1]);
    });
  });

  describe("추가 자료구조를 사용하지 않는 풀이", function () {
    // it(`${case1[0]}는 ${case1[1]}이여야 함`, function () {
    //   assert.equal(isUnique(case1[0]), case1[1]);
    // });
    // it(`${case2[0]}는 ${case2[1]}이여야 함`, function () {
    //   assert.equal(isUnique(case2[0]), case2[1]);
    // });
    // it(`${case3[0]}는 ${case3[1]}이여야 함`, function () {
    //   assert.equal(isUnique(case3[0]), case3[1]);
    // });
    // it(`${case4[0]}는 ${case4[1]}이여야 함`, function () {
    //   assert.equal(isUnique(case4[0]), case4[1]);
    // });
  });
});
