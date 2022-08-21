import { LinkedList } from "../utils/index.js";

const emptyNode = { value: 0, next: null };

const phasedSum = (payload) => {
  const { firstNode, firstLength, secondNode, secondLength } = payload;
  if (firstLength + secondLength === 0) {
    return { carry: 0, value: [] };
  }

  const nextPayload = { ...payload };

  let firstValue = 0;
  let secondValue = 0;

  if (firstLength >= secondLength) {
    const { value, next } = firstNode || emptyNode;
    firstValue = value;
    nextPayload.firstNode = next;
    nextPayload.firstLength = firstLength - 1;
  }

  if (secondLength >= firstLength) {
    const { value, next } = secondNode || emptyNode;
    secondValue = value;
    nextPayload.secondNode = next;
    nextPayload.secondLength = secondLength - 1;
  }

  const { carry, value } = phasedSum(nextPayload);

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
