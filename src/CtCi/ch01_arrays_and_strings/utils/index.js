const stringToCharArray = (value) =>
  typeof value === "string" ? [...value] : value;

const toString = (array) => array.join("");

const ERROR_CODE_INVALID_MATRIX = "Invalid matrix";
const ERROR_CODE_NON_RECTANGULAR_MATRIX = "Non-rectangular matrix";

const validateMatrix = (matrix) => {
  const { length } = matrix || { length: 0 };

  if (!matrix || length <= 0) {
    throw new Error(ERROR_CODE_INVALID_MATRIX);
  }

  if (!matrix.every((column) => column.length === length)) {
    throw new Error(ERROR_CODE_NON_RECTANGULAR_MATRIX);
  }

  return true;
};

export {
  stringToCharArray,
  toString,
  validateMatrix,
  ERROR_CODE_INVALID_MATRIX,
  ERROR_CODE_NON_RECTANGULAR_MATRIX,
};
