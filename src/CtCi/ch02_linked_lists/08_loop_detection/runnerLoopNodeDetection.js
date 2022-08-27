const isValidNodeWithNext = (node) => node && node.next !== null;

const loopDetection = (list) => {
  let fastPointer = list.head;
  let slowPointer = list.head;

  while (isValidNodeWithNext(fastPointer)) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (fastPointer === slowPointer) {
      break;
    }
  }

  if (!isValidNodeWithNext(fastPointer)) {
    return undefined;
  }

  slowPointer = list.head;
  while (fastPointer !== slowPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return fastPointer;
};

export default loopDetection;
