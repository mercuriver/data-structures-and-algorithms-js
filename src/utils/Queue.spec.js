import { expect } from "chai";
import Queue from "./Queue.js";

describe("Queue class 테스트", function () {
  const q = new Queue();

  it(`큐 생성 테스트`, function () {
    expect(q.peek()).to.null;
    expect(q.isEmpty()).to.true;
    expect(q.toArray()).to.eql([]);
  });

  const v1 = "a";
  const v2 = "b";

  it(`enqueue 테스트`, function () {
    q.enqueue(v1);
    q.enqueue(v2);

    expect(q.peek()).to.equal(v1);
    expect(q.toArray()).to.eql([v1, v2]);
    expect(q.isEmpty()).to.false;
  });

  it(`dequeue 테스트`, function () {
    expect(q.peek()).to.equal(v1);
    expect(q.dequeue()).to.equal(v1);

    expect(q.peek()).to.equal(v2);
    expect(q.toArray()).to.eql([v2]);
    expect(q.dequeue()).to.equal(v2);

    expect(q.peek()).to.null;
    expect(q.isEmpty()).to.true;
    expect(q.toArray()).to.eql([]);
  });
});
