import { stringToCharArray, toString } from "../utils/index.js";
export const ERROR_CODE_INVALID_MATRIX = "Invalid matrix";
export const ERROR_CODE_UNFIT_MATRIX = "Unfit matrix";

const rotateMatrix = (matrix) => {
  const { length } = matrix || { length: 0 };

  if (!matrix || length <= 0) {
    throw new Error(ERROR_CODE_INVALID_MATRIX);
  }

  if (!matrix.every((column) => column.length === length)) {
    throw new Error(ERROR_CODE_UNFIT_MATRIX);
  }

  if (length === 1) {
    return matrix;
  }

  const result = matrix.reverse().reduce(
    (result, column) => {
      for (const [rowIndex, char] of stringToCharArray(column).entries()) {
        result[rowIndex] = [...result[rowIndex], char];
      }
      return result;
    },
    Array.from({ length }, () => [])
  );
  return result.map((column) => toString(column));
};

export default rotateMatrix;
