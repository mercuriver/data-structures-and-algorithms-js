import { LinkedList } from "../utils/index.js";

const reverse = (node) => {
  if (node === null) {
    return [];
  }

  const { value, next } = node || { value: "", next: null };
  return [...reverse(next), value];
};

const isPalindrome = (list) => {
  // Linked list의 length 값을 알 수 없을 경우의 풀이
  const reversed = new LinkedList(reverse(list.head));

  let current = list.head;
  let reversedCurrent = reversed.head;
  let checkIsPalindrome = true;

  while (current.next && checkIsPalindrome) {
    if (current.value !== reversedCurrent.value) {
      checkIsPalindrome = false;
    }
    current = current.next;
    reversedCurrent = reversedCurrent.next;
  }

  return checkIsPalindrome;
};

export default isPalindrome;
