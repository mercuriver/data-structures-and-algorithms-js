import { stringToCharArray, toString, validateMatrix } from "../utils/index.js";

const rotateMatrix = (matrix) => {
  const { length } = matrix || { length: 0 };

  validateMatrix(matrix);

  if (length === 1) {
    return matrix;
  }

  return matrix
    .reverse()
    .reduce(
      (result, column) => {
        for (const [rowIndex, char] of stringToCharArray(column).entries()) {
          result[rowIndex] = [...result[rowIndex], char];
        }
        return result;
      },
      Array.from({ length }, () => [])
    )
    .map((column) => toString(column));
};

export default rotateMatrix;
