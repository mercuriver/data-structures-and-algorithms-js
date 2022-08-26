export { default as Node } from "./Node.js";
export { default as LinkedList } from "./LinkedList.js";

const nodeArrayStringify = (list, ignoreNext = false) =>
  list.map((row) => row.toString(ignoreNext));

export { nodeArrayStringify };
