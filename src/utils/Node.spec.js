import assert from "assert";
import Node from "./Node.js";

// Todo: 테스트 코드 정리 및 표현력 개선
describe("Node class 테스트", function () {
  it(`노드 생성`, function () {
    const value1 = "1";
    const value2 = "2";
    const node1 = new Node(value1);
    const node2 = new Node(value2, node1);

    assert.equal(node1.value, value1);
    assert.equal(node1.next, undefined);

    assert.equal(node2.value, value2);
    assert.equal(node2.next, node1);
    assert.equal(node2.next.value, value1);
    assert.equal(node2.next.next, undefined);
  });
});
