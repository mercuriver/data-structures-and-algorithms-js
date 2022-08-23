export { default as Node } from "./Node.js";
export { default as LinkedList } from "./LinkedList.js";

const nodeArrayStringify = (list) => list.map((row) => row.toString());

export { nodeArrayStringify };
