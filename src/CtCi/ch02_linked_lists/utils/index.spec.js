import { expect } from "chai";
import { Node, nodeArrayStringify } from "./index.js";

const source = ["1-1", "1-2", "1-3"];

describe("nodeArrayStringify 테스트", function () {
  it(`빈 배열 nodeArrayStringify 테스트`, function () {
    expect(nodeArrayStringify([])).to.eql([]);
  });

  const list = source.map((row) => new Node(row));
  it(`${list} nodeArrayStringify 테스트`, function () {
    expect(nodeArrayStringify(list)).to.eql([
      new Node(source[0]).toString(),
      new Node(source[1]).toString(),
      new Node(source[2]).toString(),
    ]);
  });
});
