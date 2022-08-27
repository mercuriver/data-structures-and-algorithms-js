import { expect } from "chai";
import { LinkedList, nodeArrayStringify, skipNode } from "../utils/index.js";
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
  const expectList = new LinkedList(source);
  it(`'${source[source.length - 1]}' tail 반복`, function () {
    expect(nodeArrayStringify(loopDetection(list), true)).to.be.eql(
      nodeArrayStringify([expectList.tail], true)
    );
  });
});

describe("루프 탐색기", function () {
  const list = new LinkedList(source);
  skipNode(list.head, 3).next = skipNode(list.head, 1);

  const expectHead = new LinkedList(source).head;
  const expectList = [
    skipNode(expectHead, 1),
    skipNode(expectHead, 2),
    skipNode(expectHead, 3),
  ];

  it(`'${[source[1], source[2], source[3]]}' 부분 반복`, function () {
    expect(nodeArrayStringify(loopDetection(list), true)).to.be.eql(
      nodeArrayStringify(expectList, true)
    );
  });
});

describe("루프 탐색기", function () {
  const { length } = source;
  const list = new LinkedList(source);
  list.tail.next = skipNode(list.head, length - 3);

  const expectHead = new LinkedList(source).head;
  const expectList = [
    skipNode(expectHead, length - 3),
    skipNode(expectHead, length - 2),
    skipNode(expectHead, length - 1),
  ];

  it(`'${[
    source[length - 1],
    source[length - 3],
    source[length - 2],
  ]}' tail 부터 부분 반복`, function () {
    expect(nodeArrayStringify(loopDetection(list), true)).to.be.eql(
      nodeArrayStringify(expectList, true)
    );
  });
});
