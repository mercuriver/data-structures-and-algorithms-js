import { expect } from "chai";
import Stack from "./Stack.js";

describe("Stack class 테스트", function () {
  const stack = new Stack();
  const v1 = "a";
  const v2 = "b";

  it(`빈 스택 생성`, function () {
    expect(stack.toArray()).to.eql([]);
    expect(stack.isEmpty()).to.be.true;
  });

  it(`스택 Push`, function () {
    stack.push(v1);
    stack.push(v2);
    expect(stack.toArray()).to.eql([v1, v2]);
    expect(stack.size()).to.equal(2);
    expect(stack.isEmpty()).to.be.false;
  });

  it(`스택 Peek & Pop`, function () {
    expect(stack.peek()).to.eql(v2);
    expect(stack.pop()).to.eql(v2);
    expect(stack.toArray()).to.eql([v1]);
    expect(stack.isEmpty()).to.be.false;
  });

  it(`스택 비우기`, function () {
    expect(stack.pop()).to.eql(v1);
    expect(stack.pop()).to.be.null;
    expect(stack.peek()).to.be.null;
    expect(stack.isEmpty()).to.be.true;
  });
});
