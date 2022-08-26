const pickRange = (startNode, endNode) => {
  const list = [startNode];
  let current = startNode;
  while (current !== endNode && current.next !== null) {
    list.push(current.next);
    current = current.next;
  }
  return list;
};

const loopDetection = (list) => {
  const hashMap = new Map();

  let current = list.head;
  let prev = null;

  while (current) {
    const uid = current.uid;
    if (hashMap.has(uid)) {
      return pickRange(hashMap.get(uid), prev);
    }

    hashMap.set(uid, current);
    prev = current;
    current = current.next;
  }

  return [];
};

export default loopDetection;
