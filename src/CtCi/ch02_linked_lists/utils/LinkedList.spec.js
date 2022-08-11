import { expect } from "chai";
import LinkedList from "./LinkedList.js";

const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("LinkedList class 테스트", function () {
  it(`연결 리스트 생성`, function () {
    const list = new LinkedList();

    for (const unit of listArray) {
      list.append(unit);
    }

    expect(listArray).to.eql(list.toArray());
  });
});
