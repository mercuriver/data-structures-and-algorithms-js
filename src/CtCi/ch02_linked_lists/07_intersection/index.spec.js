import { expect } from "chai";
import { LinkedList } from "../utils/index.js";
import { bruteForce, stackForward, stackBackward } from "./index.js";

const firstSource = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"];
const secondSource = ["2-1", "2-2", "2-3", "2-4"];

describe("교집합", function () {
  const firstList = new LinkedList(firstSource);
  const secondList = new LinkedList(secondSource);

  it(`[bruteForce] '${firstList.toArray()}','${secondList.toArray()} 교집합 요소가 없는 케이스, 반환 값 'undefined'`, function () {
    expect(bruteForce(firstList, secondList)).to.be.undefined;
  });
  it(`[stackForward] '${firstList.toArray()}','${secondList.toArray()} 교집합 요소가 없는 케이스, 반환 값 'undefined'`, function () {
    expect(stackForward(firstList, secondList)).to.be.undefined;
  });
  it(`[stackBackward] '${firstList.toArray()}','${secondList.toArray()} 교집합 요소가 없는 케이스, 반환 값 'undefined'`, function () {
    expect(stackBackward(firstList, secondList)).to.be.undefined;
  });
});

describe("교집합", function () {
  const intersectionList = new LinkedList(["3-1", "3-2", "3-3"]);
  const firstList = new LinkedList(firstSource);
  const secondList = new LinkedList(secondSource);

  firstList.tail.next = intersectionList.head;
  secondList.tail.next = intersectionList.head;

  it(`[bruteForce] '${firstList.toArray()}','${secondList.toArray()} 교집합 요소가 있는 케이스, 반환 값 ${intersectionList.head.toString()}`, function () {
    expect(bruteForce(firstList, secondList)).to.be.equal(
      intersectionList.head
    );
  });
  it(`[stackForward] '${firstList.toArray()}','${secondList.toArray()} 교집합 요소가 있는 케이스, 반환 값 ${intersectionList.head.toString()}`, function () {
    expect(stackForward(firstList, secondList)).to.be.equal(
      intersectionList.head
    );
  });
  it(`[stackBackward] '${firstList.toArray()}','${secondList.toArray()} 교집합 요소가 있는 케이스, 반환 값 ${intersectionList.head.toString()}`, function () {
    expect(stackBackward(firstList, secondList)).to.be.equal(
      intersectionList.head
    );
  });
});
