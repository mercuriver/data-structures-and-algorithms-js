import { toString, stringToCharArray } from "../utils/index.js";

export const ERROR_CODE_INVALID_MATRIX = "Invalid matrix";
export const ERROR_CODE_UNFIT_MATRIX = "Unfit matrix";

const MASK_SYMBOL = "0";
const NORMAL_SYMBOL = "1";

const zeroMatrix = (matrix) => {
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

  const horizontalMaskMap = Array.from({ length }, () => NORMAL_SYMBOL);
  const verticalMaskMap = Array.from({ length }, () => NORMAL_SYMBOL);

  for (let i = 0; i < matrix.length; i++) {
    const column = matrix[i];
    for (let j = 0; j < column.length; j++) {
      if (column[j] === MASK_SYMBOL) {
        verticalMaskMap[j] = MASK_SYMBOL;
        horizontalMaskMap[i] = MASK_SYMBOL;
      }
    }
  }

  return matrix
    .reduce(
      (result, column, columnIndex) => {
        if (horizontalMaskMap[columnIndex] === MASK_SYMBOL) {
          result[columnIndex] = Array.from({ length }, () => MASK_SYMBOL);
        } else {
          result[columnIndex] = stringToCharArray(column);
          for (const rowIndex of result[columnIndex].keys()) {
            if (verticalMaskMap[rowIndex] === MASK_SYMBOL) {
              result[columnIndex][rowIndex] = MASK_SYMBOL;
            }
          }
        }
        return result;
      },
      Array.from({ length }, () => [])
    )
    .map((column) => toString(column));
};

export default zeroMatrix;
