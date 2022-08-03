const checkPermute = (firstValue, secondValue) => {
  if (firstValue.length === 0 || firstValue.length !== secondValue.length) {
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

export default checkPermute;
