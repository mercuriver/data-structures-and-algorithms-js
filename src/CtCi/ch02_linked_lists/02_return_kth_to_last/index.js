// Todo: 포인터를 사용한 처리 방식

// Todo: 재귀를 사용한 처리 방식

// Stack을 사용한 처리 방식
const findKthToLast = (value, index) => {
  let current = value.head;
  const miniStack = [current.value];

  if (index < 0) {
    return undefined;
  }

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
