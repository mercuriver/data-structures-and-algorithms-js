const removeDuplicates = (value) => {
  const maskMap = new Set();
  let current = value.head;
  maskMap.add(current.value);

  while (current.next !== null) {
    const value = current.next.value;
    if (maskMap.has(value)) {
      current.next = current.next.next;
    } else {
      maskMap.add(value);
      current = current.next;
    }
  }
  return value;
};

export default removeDuplicates;
