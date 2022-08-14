import { expect } from "chai";
import LinkedList from "./LinkedList.js";

const listArray = [1, 2, 3, 4];

describe("LinkedList class 테스트", function () {
  const list = new LinkedList(listArray);

  it(`배열을 통한 연결 리스트 생성`, function () {
    expect(list.toArray()).to.eql(listArray);
  });

  it(`단일 값 통한 연결 리스트 생성`, function () {
    expect(new LinkedList(1).toArray()).to.eql([1]);
  });

  it(`인자 없이 연결 리스트 생성`, function () {
    expect(new LinkedList().toArray()).to.eql([]);
  });

  it(`removeAt() 테스트`, function () {
    expect(list.removeAt(2)).be.true;
    expect(list.toArray()).to.eql([1, 2, 4]);
  });

  it(`pop(), 반환값 4`, function () {
    expect(list.pop()).to.equal(4);
    expect(list.toArray()).to.eql([1, 2]);
  });

  it(`insertAt() 테스트`, function () {
    expect(list.insertAt(1, 4)).to.be.true;
    expect(list.insertAt(1, 3)).to.be.true;
    expect(list.insertAt(0, 0)).to.be.true;
    expect(list.toArray()).to.eql([0, 1, 3, 4, 2]);
  });

  it(`연속 shift(), pop() 테스트`, function () {
    expect(list.shift()).to.equal(0);
    expect(list.pop()).to.equal(2);
    expect(list.shift()).to.equal(1);
    expect(list.toArray()).to.eql([3, 4]);
  });

  it(`prepend() 테스트`, function () {
    list.prepend(2);
    list.prepend(1);
    list.prepend(0);
    expect(list.toArray()).to.eql([0, 1, 2, 3, 4]);
  });

  it(`append() 테스트`, function () {
    list.append(5);
    list.append(6);
    list.append(7);
    expect(list.toArray()).to.eql([0, 1, 2, 3, 4, 5, 6, 7]);
  });

  it(`prepend() 체이닝 테스트`, function () {
    list.prepend(-1).prepend(-2).prepend(-3);
    expect(list.toArray()).to.eql([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);
  });

  it(`append() 체이닝 테스트`, function () {
    list.append(8).append(9).append(10);
    expect(list.toArray()).to.eql([
      -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
