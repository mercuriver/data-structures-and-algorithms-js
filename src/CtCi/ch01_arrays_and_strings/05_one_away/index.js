/**
 * N: firstValue.length, M: secondValue.length
 * 시간복잡도: O(N | M)
 * 공간복잡도: O(1)
 */
const CHECK_COUNT = 1;

const isValideConcordance = (base, target, lengthDiff) => {
  let targetIndex = 0;
  let diffCount = 0;

  for (const char of base) {
    if (char !== target[targetIndex]) {
      diffCount++;
      if (diffCount > CHECK_COUNT) {
        return false;
      }
      if (lengthDiff === 0) {
        targetIndex++;
      }
    } else {
      targetIndex++;
    }
  }

  return true;
};

const oneAway = (firstValue, secondValue) => {
  const lengthDiff = firstValue.length - secondValue.length;
  const absoluteLengthDIff = Math.abs(lengthDiff);

  if (absoluteLengthDIff > CHECK_COUNT) {
    return false;
  }

  return lengthDiff < 0
    ? isValideConcordance(secondValue, firstValue, absoluteLengthDIff)
    : isValideConcordance(firstValue, secondValue, absoluteLengthDIff);
};

export default oneAway;
