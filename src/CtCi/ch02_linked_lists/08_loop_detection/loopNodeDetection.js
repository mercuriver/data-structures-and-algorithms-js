const loopDetection = (list) => {
  const hashMap = new Set();
  let current = list.head;

  while (current) {
    const uid = current.uid;
    if (hashMap.has(uid)) {
      return current;
    }

    hashMap.add(uid);
    current = current.next;
  }
  return undefined;
};

export default loopDetection;
