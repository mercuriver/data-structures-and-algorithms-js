const isPalindrome = (list) => {
  const miniStack = [];
  let fastPointer = list.head;
  let slowPointer = list.head;

  while (fastPointer.next?.next) {
    miniStack.push(slowPointer.value);
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  if (fastPointer.next) {
    miniStack.push(slowPointer.value);
  }
  slowPointer = slowPointer.next;

  while (slowPointer) {
    if (slowPointer.value !== miniStack.pop()) {
      return false;
    }
    slowPointer = slowPointer.next;
  }
  return true;
};

export default isPalindrome;
