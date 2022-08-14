export { default as Node } from "./Node.js";
export { default as LinkedList } from "./LinkedList.js";

const createNode = (node, next) => ({
  node,
  next: next || null,
});

const arrayToLinkedList = (arrayValue) => {
  const { length } = arrayValue || { length: 0 };
  let linkedList = null;

  if (length <= 0) {
    return linkedList;
  }

  for (const unit of arrayValue.reverse()) {
    linkedList = createNode(unit, linkedList);
  }

  return linkedList;
};

export { createNode, arrayToLinkedList };
