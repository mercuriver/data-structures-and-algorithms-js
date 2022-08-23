const peek = (stack) =>
  stack.length > 0 ? stack[stack.length - 1] : undefined;

const toStack = (list) => {
  const stack = [];
  let current = list.head;
  let length = 0;

  while (current) {
    stack.push(current);
    length += 1;
    current = current.next;
  }

  return { stack, length };
};

const isIntersection = (firstList, secondList) => {
  const { stack: firstStack, length: firstLength } = toStack(firstList);
  const { stack: secondStack, length: secondLength } = toStack(secondList);

  // JS는 주소값을 사용할 수 없기 때문에, Node class 내 생성자에서 부여하는 Symbol type 'uid'로 대체
  // 교집합인 경우, node를 공유한 이후부터는 같은 linked list 요소로 전개 되므로 마지막 node가 동일해야 함
  if (
    firstLength === 0 ||
    secondLength === 0 ||
    peek(firstStack).uid !== peek(secondStack).uid
  ) {
    return undefined;
  }

  let intersect;
  while (peek(firstStack).uid === peek(secondStack).uid) {
    intersect = peek(firstStack);
    firstStack.pop();
    secondStack.pop();
  }
  return intersect;
};

export default isIntersection;
