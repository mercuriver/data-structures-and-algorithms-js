const sumListJS = (list, isReverse = false) => {
  const buffer = [];

  let current = list.head;

  while (current !== null) {
    if (isReverse) {
      buffer.unshift(current.value);
    } else {
      buffer.push(current.value);
    }
    current = current.next;
  }

  return buffer.length <= 0 ? 0 : parseInt(buffer.join(""), 10);
};

const sumList = (list, isReverse = false) => {
  return 0;
};

export default sumList;
