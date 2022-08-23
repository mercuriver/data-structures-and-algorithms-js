import { expect } from "chai";
import { LinkedList, nodeArrayStringify } from "../utils/index.js";
import loopDetection from "./index.js";

const source = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"];

describe("루프 탐색기", function () {
  const list = new LinkedList(source);

  it(`'${source}' 반복 요소 없음`, function () {
    expect(nodeArrayStringify(loopDetection(list))).to.be.eql([]);
  });
});

// describe("루프 탐색기", function () {
//   const list = new LinkedList(source);
//   const expectList = new LinkedList(source);
//   list.tail.next = list.head;
//   it(`'${source}' 전체 반복`, function () {
//     expect(nodeArrayStringify(loopDetection(list))).to.be.eql(
//       nodeArrayStringify(expectList.toArray())
//     );
//   });
// });

// describe("루프 탐색기", function () {
//   const list = new LinkedList(source);
//   list.tail.next = list.tail;
//   it(`'${source}' tail 반복`, function () {
//     expect(loopDetection(list)).to.be.eql([list.tail]);
//   });
// });

// describe("루프 탐색기", function () {
//   const list = new LinkedList(source);
//   const expectList = [list.next, list.next.next, list.next.next.next];
//   list.next = list.next.next.next;

//   it(`'${source}' tail 반복`, function () {
//     expect(loopDetection(list)).to.be.eql(expectList);
//   });
// });

// describe("루프 탐색기", function () {
//   const list = new LinkedList(source);
//   const [, , , ...rest] = source;
//   const expectList = new LinkedList(rest);
//   list.tail.next = list.head.next.next.next;
//   it(`'${source}' tail 반복`, function () {
//     expect(loopDetection(list).toArray()).to.be.eql(expectList);
//   });
// });
