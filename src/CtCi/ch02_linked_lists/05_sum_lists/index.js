import { LinkedList } from "../utils/index.js";

const sumListForward = (firstList, secondList) => {
  return firstList;
};

const emptyNode = { value: 0, next: null };

const phasedSum = (firstNode, secondNode, carry) => {
  const { value: firstValue, next: firstNext } = firstNode || emptyNode;
  const { value: secondValue, next: secondNext } = secondNode || emptyNode;

  const sumValue = firstValue + secondValue + carry;

  if (sumValue === 0) {
    return [];
  }

  const currentCarry = sumValue > 10 ? 1 : 0;
  const currentValue = sumValue % 10;

  return [currentValue, ...phasedSum(firstNext, secondNext, currentCarry)];
};

const sumList = (firstList, secondList) =>
  new LinkedList(phasedSum(firstList.head, secondList.head, 0));

export { sumList, sumListForward };
