const checkPermute = (firstValue, secondValue) => {
  const charMap = new Map();

  for (const char of firstValue) {
    if (!charMap.has(char)) {
      charMap.set(char, 1);
    } else {
      charMap.set(char, charMap.get(char) + 1);
    }
  }

  for (const char of secondValue) {
    if (charMap.has(char) && charMap.get(char) > 0) {
      charMap.set(char, charMap.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};

export default checkPermute;
