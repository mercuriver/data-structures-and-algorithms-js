const deleteMiddleNode = (list, target) => {
  let prev = list.head;

  console.log("######## start", list.toArray());

  // check head
  while (prev.value === target) {
    list.shift();
    prev = list.head;
  }
  let current = prev?.next || { next: null };

  console.log(prev.toString(), current.toString());

  // check middle
  while (current.next !== null) {
    if (current.value === target) {
      if (current.next === null) {
        current = null;
      } else {
        current = current.next;
      }
    }
    prev = current;
    current = current.next;
  }

  // check tail
  if (current.value === target) {
    prev.next = null;
  }

  console.log("######## return", list.toArray());

  return list;
};

export default deleteMiddleNode;
