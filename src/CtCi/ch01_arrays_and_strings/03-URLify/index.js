import { toString } from "../utils/index.js";

const REPLACE_TARGET = " ";

// 가급적 범용적인 문자열 처리 방식으로 구현
const urlify = (value, _) => {
  const spaceCount = value.reduce(
    (count, char) => (char === REPLACE_TARGET ? count + 1 : count),
    0
  );

  if (spaceCount === 0) {
    return toString(value);
  }

  const { length } = value;
  const buffer = Array(length + spaceCount * 2);
  let index = 0;
  for (const char of value) {
    if (char === REPLACE_TARGET) {
      buffer[index++] = "%";
      buffer[index++] = "2";
      buffer[index++] = "0";
    } else {
      buffer[index++] = char;
    }
  }

  return toString(buffer);
};

export { urlify };
