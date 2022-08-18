const partition = (list, target) => {
  const leftQueue = [];
  const rightQueue = [];

  let current = list.head;

  while (current !== null) {
    if (current.value < target) {
      leftQueue.push(current);
    } else {
      rightQueue.push(current);
    }

    current = current.next;
  }

  if (leftQueue.length <= 0) {
    return list;
  }

  let newCurrent = leftQueue.shift();
  list.head = newCurrent;

  for (const unit of [...leftQueue, ...rightQueue]) {
    newCurrent.next = unit;
    newCurrent = unit;
  }
  newCurrent.next = null;

  return list;
};

export default partition;
