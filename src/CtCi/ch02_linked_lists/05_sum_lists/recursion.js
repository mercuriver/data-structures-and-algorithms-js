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

export default phasedSum;
