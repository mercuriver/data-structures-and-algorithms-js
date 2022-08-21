import { LinkedList } from "../utils/index.js";

const emptyNode = { value: 0, next: null };

const phasedSum = ({ firstNode, firstLength, secondNode, secondLength }) => {
  let nextResult;
  let firstValue = 0;
  let secondValue = 0;
  if (firstLength > secondLength) {
    const { value, next: firstNext } = firstNode || emptyNode;
    firstValue = value;
    nextResult = phasedSum({
      firstNode: firstNext,
      firstLength: firstLength - 1,
      secondNode,
      secondLength,
    });
  } else if (secondLength > firstLength) {
    const { value, next: secondNext } = secondNode || emptyNode;
    secondValue = value;
    nextResult = phasedSum({
      firstNode,
      firstLength,
      secondNode: secondNext,
      secondLength: secondLength - 1,
    });
  } else {
    if (firstLength === 0) {
      return { carry: 0, value: [] };
    }

    const nextLength = firstLength - 1;
    const { value: _firstValue, next: firstNext } = firstNode || emptyNode;
    const { value: _secondValue, next: secondNext } = secondNode || emptyNode;

    firstValue = _firstValue;
    secondValue = _secondValue;

    nextResult = phasedSum({
      firstNode: firstNext,
      firstLength: nextLength,
      secondNode: secondNext,
      secondLength: nextLength,
    });
  }

  const { carry, value: nextValue } = nextResult;
  const sumValue = firstValue + secondValue + carry;
  const currentCarry = sumValue > 10 ? 1 : 0;
  const currentValue = sumValue % 10;

  console.log({ nextResult, firstValue, secondValue });
  console.log({ sumValue, currentCarry, currentValue });

  return {
    carry: currentCarry,
    value: [currentValue, ...nextValue],
  };
};

const sumList = (firstList, secondList) => {
  const { carry, value } = phasedSum({
    firstNode: firstList.head,
    firstLength: firstList.length,
    secondNode: secondList.head,
    secondLength: secondList.length,
  });

  return carry === 1
    ? new LinkedList([carry, ...value])
    : new LinkedList(value);
};

export default sumList;
