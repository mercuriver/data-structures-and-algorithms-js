const pickRange = (startNode, endNode) => {
  const list = [];
  let current = startNode;
  while (current !== null) {
    list.push(current);
    if (current === endNode) {
      return list;
    }
    current = current.next;
  }
  return [];
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
