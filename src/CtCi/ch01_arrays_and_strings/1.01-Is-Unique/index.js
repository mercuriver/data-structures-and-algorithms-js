const isUniqueSimple = (value) => {
  const chars = new Set([...value]);
  return chars.size === value.length;
};

/**
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */
const isUniqueWithDataStructure = (value) => {
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

const isUnique = (value) => {
  return false;
};

export { isUniqueSimple, isUniqueWithDataStructure, isUnique };
