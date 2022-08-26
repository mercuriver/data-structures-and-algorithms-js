import { expect } from "chai";
import { LinkedList, nodeArrayStringify } from "../utils/index.js";
import loopDetection from "./index.js";

const source = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"];

describe("루프 탐색기", function () {
  const list = new LinkedList(source);
  it(`'${source}' 반복 요소 없음`, function () {
    expect(nodeArrayStringify(loopDetection(list), true)).to.be.eql([]);
  });
});

describe("루프 탐색기", function () {
  const list = new LinkedList(source);
  list.tail.next = list.head;

  const expectList = [];
  let current = new LinkedList(source).head;
  while (current) {
    expectList.push(current);
    current = current.next;
  }

  it(`'${source}' 전체 반복`, function () {
    expect(nodeArrayStringify(loopDetection(list), true)).to.be.eql(
      nodeArrayStringify(expectList, true)
    );
  });
});

describe("루프 탐색기", function () {
  const list = new LinkedList(source);
  list.tail.next = list.tail;
  it(`'${source[source.length - 1]}' tail 반복`, function () {
    expect(nodeArrayStringify(loopDetection(list))).to.be.eql(
      nodeArrayStringify([list.tail])
    );
  });
});

describe("루프 탐색기", function () {
  const list = new LinkedList(source);
  const head = list.head;
  const expectList = [head.next, head.next.next, head.next.next.next];
  list.head.next = expectList[expectList.length - 1];

  it(`'${[source[1], source[2], source[3]]}' 부분 반복`, function () {
    expect(nodeArrayStringify(loopDetection(list))).to.be.eql(
      nodeArrayStringify(expectList)
    );
  });
});

// describe("루프 탐색기", function () {
//   const list = new LinkedList(source);
//   const [, , , ...rest] = source;
//   const expectList = new LinkedList(rest);
//   list.tail.next = list.head.next.next.next;
//   it(`'${source}' tail 반복`, function () {
//     expect(loopDetection(list).toArray()).to.be.eql(expectList);
//   });
// });
