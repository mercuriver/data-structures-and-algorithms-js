import { toString } from "../utils/index.js";

const stringCompression = (value) => {
  const { length } = value;

  if (length <= 2) {
    return toString(value);
  }

  const [first] = value;
  const { prev, result, count } = value.reduce(
    ({ prev, result, count }, char) => {
      if (prev !== char) {
        return {
          prev: char,
          result: `${result}${prev}${count}`,
          count: 1,
        };
      }

      return {
        prev,
        result,
        count: count + 1,
      };
    },
    {
      prev: first,
      result: "",
      count: 0,
    }
  );

  return result.length < length ? `${result}${prev}${count}` : toString(value);
};

export default stringCompression;
