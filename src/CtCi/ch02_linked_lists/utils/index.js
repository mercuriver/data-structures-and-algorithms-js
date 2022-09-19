export { default as Node } from "../../../utils/Node.js";
export { default as LinkedList } from "../../../utils/LinkedList.js";

const nodeArrayStringify = (list, ignoreNext = false) =>
  list.map((row) => row.toString(ignoreNext));

const skipNode = (node, repeatCount) => {
  while (repeatCount > 0 && node.next) {
    repeatCount -= 1;
    node = node.next;
  }
  return node;
};

export { nodeArrayStringify, skipNode };
