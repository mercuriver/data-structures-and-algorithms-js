/**
 * 시간복잡도: O(N)
 * 공간복잡도: O(N)
 */
const isUnique_1 = (value) => {
  const chars = new Set(value);
  return chars.size === value.length;
};

/**
 * 자료 구조를 사용한 방식
 *
 * 시간복잡도: O(N)
 * 공간복잡도: O(N)
 */
const isUnique_2 = (value) => {
  const chars = new Set();

  for (const char of value) {
    if (chars.has(char)) {
      return false;
    }
    chars.add(char);
  }
  return true;
};

/**
 * 별도의 자료구조를 사용하지 않는 방식
 *
 * 시간복잡도: O(N log N), Quick sort의 시간 복잡도
 * 공간복잡도: O(N)
 */
const isUniqueWithoutDataStructure_1 = (value) => {
  value.sort();

  let prev = undefined;
  for (const char of value) {
    if (prev === char) {
      return false;
    }
    prev = char;
  }
  return true;
};

export {
  isUnique_2 as isUnique,
  isUniqueWithoutDataStructure_1 as isUniqueWithoutDataStructure,
};
