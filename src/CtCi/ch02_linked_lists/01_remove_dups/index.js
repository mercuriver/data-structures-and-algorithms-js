const removeDuplicates = (value) => {
  const maskMap = new Set();
  let current = value.head;

  maskMap.add(current.value);

  while (current.next !== null) {
    const nextNode = current.next;

    if (maskMap.has(nextNode.value)) {
      current.next = nextNode.next;
    } else {
      maskMap.add(nextNode.value);
      current = nextNode;
    }
  }
  return value;
};

export default removeDuplicates;
