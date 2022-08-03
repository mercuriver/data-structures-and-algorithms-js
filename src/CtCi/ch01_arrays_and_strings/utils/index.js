const stringToCharArray = (value) =>
  typeof value === "string" ? [...value] : value;

const toString = (array) => array.join("");

export { stringToCharArray, toString };
