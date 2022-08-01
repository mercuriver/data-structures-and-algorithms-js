import assert from "assert";
import Adder from "./Adder.js";

describe("Class Field 테스트", function () {
  describe("#privateField", function () {
    it("(1, 2)를 전달하여 생성한 adder 인스턴스의 summary 값은 3이여야 함", function () {
      const adder = new Adder(1, 2);
      assert.equal(adder.summary, 3);
    });
  });
});
