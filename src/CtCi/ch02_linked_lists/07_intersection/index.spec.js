import { expect } from "chai";
import { LinkedList } from "../utils/index.js";
import isIntersection from "./index.js";

const firstSource = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"];
const secondSource = ["2-1", "2-2", "2-3", "2-4", "2-5", "2-6"];

describe("교집합", function () {
  const firstList = new LinkedList(firstSource);
  const secondList = new LinkedList(secondSource);

  it(`'${firstList.toString()}','${secondList.toString()} 교집합 요소가 없는 케이스, 반환 값 'undefined'`, function () {
    expect(isIntersection(firstList, secondList)).to.be.undefined;
  });
});

describe("교집합", function () {
  const firstList = new LinkedList(firstSource);
  const secondList = new LinkedList(secondSource);

  const intersectionNode = firstList.head.next.next.next;
  const insertNode = secondList.head.next.next;

  secondList.head.next.next = intersectionNode;
  intersectionNode.next = insertNode;

  it(`'${firstList.toString()}','${secondList.toString()} 교집합 요소가 있는 케이스, 반환 값 ${intersectionNode.toString()}`, function () {
    expect(isIntersection(firstList, secondList)).to.be.equal(intersectionNode);
  });
});
