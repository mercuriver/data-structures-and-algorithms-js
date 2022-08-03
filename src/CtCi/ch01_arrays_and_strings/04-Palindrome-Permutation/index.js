/**
 * 시간복잡도: O(N)
 * 공간복잡도: O(N)
 */
const palindromePermutation = (value) => {
  const charMap = new Map();

  for (const char of value) {
    if (char !== " ") {
      const charKey = char.toUpperCase();
      charMap.set(charKey, charMap.get(charKey) + 1 || 1);
    }
  }

  let centerCharIsSet = false;
  for (const [_, count] of charMap) {
    const isOdd = count % 2 === 1;

    if (isOdd) {
      if (centerCharIsSet) {
        return false;
      }
      centerCharIsSet = true;
    }
  }
  return true;
};

export default palindromePermutation;
