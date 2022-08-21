import { LinkedList } from "../utils/index.js";
import recursion from "./recursion.js";
import forward from "./forward.js";

const sumListForward = (firstList, secondList) =>
  forward(firstList, secondList);

const sumList = (firstList, secondList) =>
  new LinkedList(recursion(firstList.head, secondList.head, 0));

export { sumList, sumListForward };
