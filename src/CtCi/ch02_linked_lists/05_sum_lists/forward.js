import { LinkedList } from "../utils/index.js";

const emptyNode = { value: 0, next: null };

const phasedSum = ({
  firstNode: currentFirstNode,
  firstLength: currentFirstLength,
  secondNode: currentSecondNode,
  secondLength: currentSecondLength,
}) => {
  if (currentFirstLength + currentSecondLength === 0) {
    return { carry: 0, value: [] };
  }

  let nextFirstNode = currentFirstNode;
  let nextFirstLength = currentFirstLength;
  let nextSecondNode = currentSecondNode;
  let nextSecondLength = currentSecondLength;

  let firstValue = 0;
  let secondValue = 0;

  if (currentFirstLength >= currentSecondLength) {
    const { value, next } = currentFirstNode || emptyNode;
    firstValue = value;
    nextFirstNode = next;
    nextFirstLength = currentFirstLength - 1;
  }
  if (currentSecondLength >= currentFirstLength) {
    const { value, next } = currentSecondNode || emptyNode;
    secondValue = value;
    nextSecondNode = next;
    nextSecondLength = currentSecondLength - 1;
  }

  const { carry, value } = phasedSum({
    firstNode: nextFirstNode,
    firstLength: nextFirstLength,
    secondNode: nextSecondNode,
    secondLength: nextSecondLength,
  });

  const currentSumValue = firstValue + secondValue + carry;
  const currentCarry = currentSumValue >= 10 ? 1 : 0;
  const currentValue = currentSumValue % 10;

  return {
    carry: currentCarry,
    value: [currentValue, ...value],
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
