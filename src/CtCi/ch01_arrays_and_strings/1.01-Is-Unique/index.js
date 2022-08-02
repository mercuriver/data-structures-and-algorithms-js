/**
 * 시간복잡도: O(N)
 * 공간복잡도: O(N)
 */
const isUnique_1 = (value) => {
  const chars = new Set([...value]);
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
  const { length } = value;

  for (let i = 0; i < length; i++) {
    const char = value[i];
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
  const charArray = [...value].sort();
  const { length } = charArray;

  for (let i = 0; i < length - 1; i++) {
    if (charArray[i] === charArray[i + 1]) {
      return false;
    }
  }
  return true;
};

export {
  isUnique_2 as isUnique,
  isUniqueWithoutDataStructure_1 as isUniqueWithoutDataStructure,
};
