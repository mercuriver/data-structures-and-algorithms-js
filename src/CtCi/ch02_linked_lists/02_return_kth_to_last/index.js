// 포인터를 사용한 처리 방식
const findKthToLast = (value, index) => {
  if (index < 0) {
    return undefined;
  }

  let target = value.head;
  let tail = target;

  for (let i = 0; i < index; i++) {
    if (tail.next === null) {
      return undefined;
    }
    tail = tail.next;
  }

  while (tail.next !== null) {
    target = target.next;
    tail = tail.next;
  }

  return target.value;
};

// Stack을 사용한 처리 방식
const findKthToLast_stack = (value, index) => {
  if (index < 0) {
    return undefined;
  }

  let current = value.head;
  const miniStack = [current.value];

  while (current.next !== null) {
    current = current.next;
    miniStack.push(current.value);
  }

  if (index + 1 > miniStack.length) {
    return undefined;
  }

  for (let i = 0; i < index; i++) {
    miniStack.pop();
  }

  return miniStack.pop() || undefined;
};

export default findKthToLast;
