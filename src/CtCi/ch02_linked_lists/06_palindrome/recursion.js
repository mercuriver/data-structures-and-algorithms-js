const recursiveChecker = (forwardNode, list) => {
  const { checker, backwardNode } =
    forwardNode.next === null
      ? {
          checker: true,
          backwardNode: list.head,
        }
      : recursiveChecker(forwardNode.next, list);

  return {
    checker: checker && backwardNode.value === forwardNode.value,
    backwardNode: backwardNode.next,
  };
};

const isPalindrome = (list) => recursiveChecker(list.head, list).checker;

export default isPalindrome;
