const createNode = (node, next) => ({
  node,
  next: next || null,
});

const arrayToLinkedList = (arrayValue) => {
  const { length } = arrayValue || { length: 0 };
  const linkedList = null;

  if (length <= 0) {
    return linkedList;
  }

  for (const unit of arrayValue) {
    linkedList = createNode(unit, linkedList);
  }

  return linkedList;
};

export { createNode, arrayToLinkedList };
