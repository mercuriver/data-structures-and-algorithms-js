export const ERROR_CODE_INVALID_MATRIX = "Invalid matrix";
export const ERROR_CODE_UNFIT_MATRIX = "Unfit matrix";

const zeroMatrix = (matrix) => {
  throw new Error(ERROR_CODE_INVALID_MATRIX);

  return "";
};

export default zeroMatrix;
