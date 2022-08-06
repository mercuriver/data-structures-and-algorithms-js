const isWrongStringLength = (firstValue, secondValue) => {
  return firstValue.length === 0 || firstValue.length !== secondValue.length;
};

/**
 * 자료 구조를 사용한 방식
 *
 * N: firstValue.length, M: secondValue.length
 * 시간복잡도: O(N+M)
 * 공간복잡도: O(N)
 */
const checkPermute = (firstValue, secondValue) => {
  if (isWrongStringLength(firstValue, secondValue)) {
    return false;
  }

  const charMap = new Map();

  for (const char of firstValue) {
    if (!charMap.has(char)) {
      charMap.set(char, 1);
    } else {
      charMap.set(char, charMap.get(char) + 1);
    }
  }

  for (const char of secondValue) {
    if (!charMap.has(char)) {
      return false;
    }

    const count = charMap.get(char);
    if (count > 1) {
      charMap.set(char, count - 1);
    } else {
      charMap.delete(char);
    }
  }

  return charMap.size === 0;
};

/**
 * 정렬을 활용한 방식
 *
 * N: firstValue.length, M: secondValue.length
 * 시간복잡도: O(N log N + M log M)
 * 공간복잡도: O(N + M)
 */
const checkPermuteBySort = (firstValue, secondValue) => {
  if (isWrongStringLength(firstValue, secondValue)) {
    return false;
  }

  firstValue.sort();
  secondValue.sort();

  return firstValue.every((char, i) => char === secondValue[i]);
};

export { checkPermute, checkPermuteBySort };
